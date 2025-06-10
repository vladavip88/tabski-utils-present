import type {
  OrderItem_V2,
  OrderItemTaxes_V2,
  OrderCheck_V2,
} from "../../types/graphql";

import { bankersRound } from "../../common/commonUtils";
import {
  calculateOrderItemBasePrice,
  calculateOrderItemModifiersPrice,
} from "../common/orderCommonCalculations";
import {
  calculateOrderCheckItemAmount,
  calculateOrderCheckItemDiscounts,
  calculateOrderCheckItemTaxes,
  calculateOrderItemTaxPrice,
  filterVoidedOrderCheckItems,
  applyOrderCheckDiscountOnExistingCheckItems,
} from "../common/orderCheckCommonCalculations";

// ======================================================== //
// === CALCULATE ORDER CHECK ITEM INCLUSIVE TAXES PRICE === //
// ======================================================== //
interface CalculateOrderCheckItemInclusiveTaxApiParams {
  orderCheckItemBasePrice: number;
  orderItemTaxes: OrderItemTaxes_V2[];
}
type CalculateOrderCheckItemInclusiveTaxApi = (
  params: CalculateOrderCheckItemInclusiveTaxApiParams
) => number;

export const calculateOrderCheckItemInclusiveTaxApi: CalculateOrderCheckItemInclusiveTaxApi =
  ({ orderCheckItemBasePrice, orderItemTaxes }) => {
    const exclusiveTaxes = orderItemTaxes.filter((tax) => !tax.isInclusive);
    const inclusiveTaxes = orderItemTaxes.filter((tax) => tax.isInclusive);

    if (exclusiveTaxes.length && inclusiveTaxes.length) {
      throw new Error("All inclusive taxes must be marked as inclusive");
    }

    if (exclusiveTaxes.length > 0) {
      return 0; // No inclusive tax to calculate
    }

    if (inclusiveTaxes.length > 1) {
      throw new Error(
        "Multiple inclusive taxes found. Only one inclusive tax is allowed."
      );
    }

    if (inclusiveTaxes.length === 0) {
      return 0; // No inclusive taxes to calculate
    }

    const taxDecimal = inclusiveTaxes[0].amount / 100;
    const inclusiveTax =
      (orderCheckItemBasePrice * taxDecimal) / (1 + taxDecimal);

    // return bankersRound({ value: inclusiveTax });

    return inclusiveTax
  };

// ============================================== //
// === CALCULATE ORDER CHECK ITEM  BASE PRICE === //
// ============================================== //
interface CalculateOrderCheckItemBasePriceApiParams {
  orderItems: Partial<OrderItem_V2>[];
  orderCheck: Partial<OrderCheck_V2>;
  orderCheckItemId: string;
}

type CalculateOrderCheckItemBasePriceApi = (
  params: CalculateOrderCheckItemBasePriceApiParams
) => number;

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

    const finalCheckItems = (orderCheck.discounts || []).reduce(
      (items, discount) =>
        applyOrderCheckDiscountOnExistingCheckItems({
          orderCheckItems: items,
          orderItems,
          discount,
        }),
      originalCheckItems
    );
    console.log('API BASE PRICE', finalCheckItems)
    const finalOrderCheckItem = finalCheckItems.find(
      (item) => item.id === orderCheckItemId
    );

    if (!finalOrderCheckItem) {
      throw new Error(
        "Final order check item not found after applying discounts"
      );
    }

    const orderCheckItemAmount = calculateOrderCheckItemAmount({
      orderCheckItem: finalOrderCheckItem,
    });
    const orderItemBasePrice = calculateOrderItemBasePrice({ orderItem });
    const orderItemModifiersPrice = calculateOrderItemModifiersPrice({
      modifiers: orderItem.modifiers || [],
    });
    const orderItemDiscountPrice = calculateOrderCheckItemDiscounts({
      orderCheckItem: finalOrderCheckItem,
      orderItem,
    });
    const orderCheckItemPrice =
      (orderItemBasePrice + orderItemModifiersPrice - orderItemDiscountPrice) *
      orderCheckItemAmount;

    // return bankersRound({ value: orderCheckItemPrice });
    return orderCheckItemPrice
  };

// ==================================================== //
// === CALCULATE ORDER CHECK ITEM CHARGE BASE PRICE === //
// ==================================================== //
interface CalculateOrderCheckItemTotalPriceApiParams {
  orderItems: Partial<OrderItem_V2>[];
  orderCheck: Partial<OrderCheck_V2>;
  orderCheckItemId: string;
}
type CalculateOrderCheckItemTotalPriceApi = (
  params: CalculateOrderCheckItemTotalPriceApiParams
) => number;

export const calculateOrderCheckItemTotalPriceApi: CalculateOrderCheckItemTotalPriceApi =
  ({ orderItems, orderCheck, orderCheckItemId }) => {
    const orderCheckItem = orderCheck.items?.find(
      (item) => item.id === orderCheckItemId
    );
    if (!orderCheckItem) {
      throw new Error("Order check item not found");
    }
    const orderItem = orderItems.find(
      (item) => item.id === orderCheckItem.orderItemId
    );
    if (!orderItem) {
      throw new Error("Order item not found for the given order check item");
    }

    const orderCheckItemBasePrice = calculateOrderCheckItemBasePriceApi({
      orderItems,
      orderCheck,
      orderCheckItemId,
    });

    const inclusiveTax = calculateOrderCheckItemInclusiveTaxApi({
      orderCheckItemBasePrice,
      orderItemTaxes: orderItem.taxes || [],
    });

    // return bankersRound({
    //   value: orderCheckItemBasePrice - inclusiveTax,
    // });
    return orderCheckItemBasePrice - inclusiveTax
  };

// ====================================== //
// === CALCULATE ORDER ITEM TAX PRICE === //
// ====================================== //
interface CalculateOrderItemTaxPriceApiParams {
  orderItemSubtotal: number;
  tax: Partial<OrderItemTaxes_V2>;
}

type CalculateOrderItemTaxPriceApi = (
  params: CalculateOrderItemTaxPriceApiParams
) => number;
export const calculateOrderItemTaxPriceApi: CalculateOrderItemTaxPriceApi = ({
  orderItemSubtotal,
  tax,
}) =>
  calculateOrderItemTaxPrice({
    orderItemSubtotal,
    tax,
  });

// ========================================= //
// === CALCULATE ORDER CHECK ITEM TAXES  === //
// ========================================= //
interface calculateOrderCheckItemTaxesApiParams {
  orderItems: Partial<OrderItem_V2>[];
  orderCheck: Partial<OrderCheck_V2>;
  orderCheckItemId: string;
}

type calculateOrderCheckItemTaxesApi = (
  params: calculateOrderCheckItemTaxesApiParams
) => number;

export const calculateOrderCheckItemTaxesApi: calculateOrderCheckItemTaxesApi =
  ({ orderItems, orderCheck, orderCheckItemId }) =>
    calculateOrderCheckItemTaxes({
      orderItems,
      orderCheck,
      orderCheckItemId,
    });
