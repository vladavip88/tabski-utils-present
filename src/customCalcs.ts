import {
  bankersRound,
  calculateOrderCheckItemAmount,
  calculateOrderCheckItemUnitDiscounts,
  calculateOrderCheckItemUnitOrderCheckDiscounts,
  calculateOrderItemUnitBasePrice,
  calculateOrderItemUnitModifiersPrice,
  calculateOrderItemUnitSubtotalPrice,
  calculateOrderItemUnitTaxPrice,
  filterVoidedOrderCheckItems,
} from '@tabski-organization/tabski-utils'

type CalculateOrderCheckItemTotalTaxes = (
  params: CalculateOrderCheckItemTaxesParams
) => number;

export const calculateOrderCheckItemTotalTaxes: CalculateOrderCheckItemTotalTaxes =
  ({ orderCheckItemId, orderCheck, orderItems }) => {
    const orderCheckItem = orderCheck.items?.find(
      (item) => item.id === orderCheckItemId
    );

    if (!orderCheckItem) {
      throw new Error("Order check item not found");
    }

    const orderItem = orderItems.find(
      (item) => item.id === orderCheckItem?.orderItemId
    );

    if (!orderItem) {
      throw new Error("Order item not found for the given order check item");
    }

    const taxes = orderItem.taxes || [];
    const exclusiveTaxes = taxes.filter((tax) => !tax.isInclusive);
    const inclusiveTaxes = taxes.filter((tax) => tax.isInclusive);

    if (exclusiveTaxes.length && inclusiveTaxes.length) {
      throw new Error("Order item taxes must be all exclusive");
    }

    if (inclusiveTaxes.length) {
      return 0;
    }

    const filteredOrderCheckItems = filterVoidedOrderCheckItems({
      orderCheckItems: orderCheck.items || [],
    });

    const finalOrderCheckItem = filteredOrderCheckItems.find(
      (item) => item.id === orderCheckItemId
    );

    if (!finalOrderCheckItem) {
      throw new Error(
        "Final order check item not found after applying discounts"
      );
    }

    const orderCheckItemAmount = orderCheckItem.amount - orderCheckItem.voidAmount;

    const orderItemUnitSubtotalPrice = calculateOrderItemUnitSubtotalPrice({
      orderItem,
    });
    const orderCheckItemUnitDiscounts = calculateOrderCheckItemUnitDiscounts({
      orderCheckItem: finalOrderCheckItem,
      orderItem,
    });
    const orderCheckItemOrderDiscounts =
      calculateOrderCheckItemUnitOrderCheckDiscounts({
        orderItems,
        orderCheck,
        orderCheckItemId,
      });

    const taxableSubtotal = Math.max(
      0,
      orderItemUnitSubtotalPrice -
        orderCheckItemUnitDiscounts -
        orderCheckItemOrderDiscounts
    );

    return taxes.reduce((totalTax, tax) => {
      const taxAmount = calculateOrderItemUnitTaxPrice({
        orderItemSubtotal: taxableSubtotal,
        tax,
      });

      // NOTE: We should round each tax amount,
      // because when we are showing each tax separately we can have an issue with rounding errors
      // example - showing/calculating tax hash map (showing each tax separately)
      const roundedTaxAmount = bankersRound({
        value: taxAmount * orderCheckItemAmount,
      });

      return totalTax + roundedTaxAmount;
    }, 0);
  };

  export const calculateOrderCheckItemBasePriceApi: CalculateOrderCheckItemBasePriceApi =
  ({ orderItems, orderCheck, orderCheckItemId }) => {
    const orderCheckItem = orderCheck.items?.find(
      (item) => item.id === orderCheckItemId
    );

    if (!orderCheckItem) {
      throw new Error("Order check item not found");
    }

    const orderItem = orderItems.find(
      (item) => item.id === orderCheckItem?.orderItemId
    );

    if (!orderItem) {
      throw new Error("Order item not found for the given order check item");
    }

    const originalCheckItems = filterVoidedOrderCheckItems({
      orderCheckItems: orderCheck.items || [],
    });

    const finalOrderCheckItem = originalCheckItems.find(
      (item) => item.id === orderCheckItemId
    );

    if (!finalOrderCheckItem) {
      throw new Error(
        "Final order check item not found after applying discounts"
      );
    }

    const orderCheckItemAmount = orderCheckItem.amount - orderCheckItem.voidAmount;
    
    const orderItemUnitBasePrice = calculateOrderItemUnitBasePrice({
      orderItem,
    });
    const orderItemUnitModifiersPrice = calculateOrderItemUnitModifiersPrice({
      modifiers: orderItem.modifiers || [],
    });
    const orderCheckItemUnitDiscountsPrice =
      calculateOrderCheckItemUnitDiscounts({
        orderCheckItem: finalOrderCheckItem,
        orderItem,
      });
    const orderCheckItemUnitOrderDiscountsPrice =
      calculateOrderCheckItemUnitOrderCheckDiscounts({
        orderCheckItemId: finalOrderCheckItem.id!,
        orderItems,
        orderCheck,
      });
    const orderCheckItemPrice =
      (orderItemUnitBasePrice +
        orderItemUnitModifiersPrice -
        orderCheckItemUnitDiscountsPrice -
        orderCheckItemUnitOrderDiscountsPrice) *
      orderCheckItemAmount;

    return bankersRound({ value: orderCheckItemPrice });
  };

export const calculateRefund = ({
  order,
  orderCheck,
  orderCheckItemId,
  orderCheckItemAmount
}) => {
  console.log(order,
  orderCheck,
  orderCheckItemId,
  orderCheckItemAmount);
  const itemBasePrice = calculateOrderCheckItemBasePriceApi({
    orderItems: order.items,
    orderCheck,
    orderCheckItemId
  });

  const itemTaxes = calculateOrderCheckItemTotalTaxes({
    orderCheckItemId,
    orderCheck,
    orderItems: order.items
  });

  const toRefund = itemBasePrice + itemTaxes;

  return bankersRound({ value: toRefund * orderCheckItemAmount });
}