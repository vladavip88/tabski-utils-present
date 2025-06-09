import type {
  OrderItem_V2,
  OrderCheckDiscount_V2,
  OrderCheckItem_V2,
  OrderItemTaxes_V2,
} from "../../types/graphql";
import { OrderChecksDiscountTypes_V2, TaxType } from "../../types/graphql";

import { validateDiscount } from "../../common/validations";
import { isNumber } from "../../common/commonUtils";
import { bankersRound } from "../commonCalculations";
import { calculateOrderItemSubtotalPrice } from "./orderCommonCalculations";
import { calculateOrderCheckSubtotalPriceUI } from "../ui/orderCheckCalculations";

// ========================================= //
// === CALCULATE ORDER CHECK ITEM AMOUNT === //
// ========================================= //
interface CalculateOrderCheckItemAmountParams {
  orderCheckItem: Partial<OrderCheckItem_V2>;
}
type CalculateOrderCheckItemAmount = (
  params: CalculateOrderCheckItemAmountParams
) => number;

export const calculateOrderCheckItemAmount: CalculateOrderCheckItemAmount = ({
  orderCheckItem,
}) => {
  if (!isNumber(orderCheckItem.amount)) {
    throw new Error("Order check item amount is missing");
  }

  const amount =
    orderCheckItem.amount -
    (orderCheckItem.refundAmount || 0) -
    (orderCheckItem.voidAmount || 0) -
    (orderCheckItem.refundFailedAmount || 0) -
    (orderCheckItem.voidPaidAmount || 0);

  return amount;
};

// ============================================ //
// === CALCULATE ORDER CHECK ITEM DISCOUNT === //
// ============================================ //
interface CalculateOrderCheckItemDiscountParams {
  discount: Partial<OrderCheckDiscount_V2>;
  orderItemSubtotalPrice: number;
}
type CalculateOrderCheckItemDiscount = (
  params: CalculateOrderCheckItemDiscountParams
) => number;

export const calculateOrderCheckItemDiscount: CalculateOrderCheckItemDiscount =
  ({ discount, orderItemSubtotalPrice }) => {
    const { amount, type } = discount;

    if (!isNumber(amount)) return 0;

    if (!type) {
      throw new Error("Order check discount type is missing");
    }

    switch (type) {
      case OrderChecksDiscountTypes_V2.FixedPercentageOff:
      case OrderChecksDiscountTypes_V2.OpenPercentageOff:
        return orderItemSubtotalPrice * (amount / 100);

      case OrderChecksDiscountTypes_V2.FixedAmountOff:
      case OrderChecksDiscountTypes_V2.OpenAmountOff:
        return amount;

      default:
        throw new Error(`Invalid discount type: ${type}`);
    }
  };

// ================================================ //
// === CALCULATE ORDER CHECK ITEM DISCOUNTS === //
// ================================================ //
interface CalculateOrderCheckItemDiscountsParams {
  orderCheckItem: Partial<OrderCheckItem_V2>;
  orderItem: Partial<OrderItem_V2>;
}
type CalculateOrderCheckItemDiscounts = (
  params: CalculateOrderCheckItemDiscountsParams
) => number;

export const calculateOrderCheckItemDiscounts: CalculateOrderCheckItemDiscounts =
  ({ orderCheckItem, orderItem }) => {
    const discounts = orderCheckItem.discounts ?? [];

    if (discounts.length === 0) return 0;

    const orderItemSubtotalPrice = calculateOrderItemSubtotalPrice({
      orderItem,
    });

    return discounts.reduce((total, discount) => {
      const orderCheckItemDiscount = calculateOrderCheckItemDiscount({
        discount,
        orderItemSubtotalPrice,
      });

      return total + bankersRound({ value: orderCheckItemDiscount });
    }, 0);
  };

// ======================================= //
// === FILTER VOIDED ORDER CHECK ITEMS === //
// ======================================= //
interface FilterVoidedOrderCheckItemsParams {
  orderCheckItems: Partial<OrderCheckItem_V2>[];
}

type FilterVoidedOrderCheckItems = (
  params: FilterVoidedOrderCheckItemsParams
) => Partial<OrderCheckItem_V2>[];

export const filterVoidedOrderCheckItems: FilterVoidedOrderCheckItems = ({
  orderCheckItems,
}) =>
  orderCheckItems.filter(
    ({ amount = 0, voidAmount = 0 }) => voidAmount !== amount
  );

// ========================================================== //
// === APPLY ORDER CHECK DISCOUNT ON EXISTING CHECK ITEMS === //
// ========================================================== //
interface ApplyOrderCheckDiscountOnExistingCheckItemsParams {
  orderItems: Partial<OrderItem_V2>[];
  orderCheckItems: Partial<OrderCheckItem_V2>[];
  discount: Partial<OrderCheckDiscount_V2>;
}

type ApplyOrderCheckDiscountOnExistingCheckItems = (
  params: ApplyOrderCheckDiscountOnExistingCheckItemsParams
) => Partial<OrderCheckItem_V2>[];

export const applyOrderCheckDiscountOnExistingCheckItems: ApplyOrderCheckDiscountOnExistingCheckItems =
  ({ orderItems, orderCheckItems, discount }) => {
    if (!discount) {
      return orderCheckItems;
    }

    validateDiscount(discount);

    // NOTE: Think about calling UI function here
    const itemsSubtotal = calculateOrderCheckSubtotalPriceUI({
      orderCheckItems,
      orderItems,
    });

    // Build map for faster lookup
    const checkItemMap = new Map(
      orderCheckItems.map((checkItem) => [checkItem.orderItemId, checkItem])
    );

    let discountRemaining = discount.amount;
    const updatedCheckItems: Partial<OrderCheckItem_V2>[] = [];

    const eligibleItems = orderItems.filter((item) =>
      checkItemMap.has(item.id)
    );

    const lastIndex = eligibleItems.length - 1;

    eligibleItems.forEach((orderItem, index) => {
      const checkItem = checkItemMap.get(orderItem.id)!;
      const itemSubtotal = calculateOrderItemSubtotalPrice({ orderItem });
      const itemAmount = checkItem.amount ?? 1;

      let discountForItem = 0;

      if (
        discount.type === OrderChecksDiscountTypes_V2.FixedAmountOff ||
        discount.type === OrderChecksDiscountTypes_V2.OpenAmountOff
      ) {
        const proportionalShare = itemSubtotal / itemsSubtotal;
        const rawItemDiscount = discount.amount * proportionalShare;

        if (index === lastIndex) {
          // Adjust for rounding loss on last item
          discountForItem = discountRemaining / itemAmount;
        } else {
          discountForItem = Math.floor(rawItemDiscount / itemAmount);
          discountRemaining -= discountForItem * itemAmount;
        }
      } else {
        // Percentage-based discount — just append it
        discountForItem = discount.amount;
      }

      const newDiscount: OrderCheckDiscount_V2 = {
        ...(discount as OrderCheckDiscount_V2),
        amount: discountForItem,
      };

      updatedCheckItems.push({
        ...checkItem,
        discounts: [...(checkItem.discounts ?? []), newDiscount],
      });
    });

    return updatedCheckItems;
  };

// ====================================== //
// === CALCULATE ORDER ITEM TAX PRICE === //
// ====================================== //
interface CalculateOrderItemTaxPriceParams {
  orderItemSubtotal: number;
  tax: Partial<OrderItemTaxes_V2>;
}

type CalculateOrderItemTaxPrice = (
  params: CalculateOrderItemTaxPriceParams
) => number;
export const calculateOrderItemTaxPrice: CalculateOrderItemTaxPrice = ({
  orderItemSubtotal,
  tax,
}) => {
  const { type, amount, isInclusive, isRemoved } = tax;

  if (isRemoved || isInclusive) return 0;

  if (!type) throw new Error("Tax type is missing");

  if (!isNumber(amount)) throw new Error("Tax amount is missing");

  if (type === TaxType.Percentage) {
    return orderItemSubtotal * (amount / 100);
  }

  if (type === TaxType.Flat) {
    // Flat tax is the same whether inclusive or exclusive
    return amount;
  }

  throw new Error(`Unknown tax type: ${type}`);
};

// ========================================= //
// === CALCULATE ORDER CHECK ITEM TAXES  === //
// ========================================= //
interface CalculateOrderCheckItemTaxesParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}

type CalculateOrderCheckItemTaxes = (
  params: CalculateOrderCheckItemTaxesParams
) => number;

export const calculateOrderCheckItemTaxes: CalculateOrderCheckItemTaxes = ({
  orderItem,
  orderCheckItem,
}) => {
  const taxes = orderItem.taxes || [];
  const exclusiveTaxes = taxes.filter((tax) => !tax.isInclusive);
  const inclusiveTaxes = taxes.filter((tax) => tax.isInclusive);

  if (exclusiveTaxes.length && inclusiveTaxes.length) {
    throw new Error("Order item taxes must be all exclusive");
  }

  if (inclusiveTaxes.length) {
    return 0;
  }

  const orderCheckItemAmount = calculateOrderCheckItemAmount({
    orderCheckItem,
  });
  const orderItemSubtotalPrice = calculateOrderItemSubtotalPrice({
    orderItem,
  });
  const orderCheckItemDiscounts = calculateOrderCheckItemDiscounts({
    orderCheckItem,
    orderItem,
  });

  const taxableSubtotal = Math.max(
    0,
    orderItemSubtotalPrice - orderCheckItemDiscounts
  );

  return taxes.reduce((totalTax, tax) => {
    const taxAmount = calculateOrderItemTaxPrice({
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
