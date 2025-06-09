import type {
  OrderItem_V2,
  OrderCheckItem_V2,
  OrderItemTaxes_V2,
} from "../../types/graphql";

import { isNumber } from "../../common/commonUtils";
import {
  calculateOrderItemBasePrice,
  calculateOrderItemModifiersPrice,
} from "../common/orderCommonCalculations";
import {
  calculateOrderCheckItemAmount,
  calculateOrderCheckItemDiscounts,
} from "../common/orderCheckCommonCalculations";

import { bankersRound } from "../commonCalculations";

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
    const inclusiveTaxes = orderItemTaxes.filter((tax) => tax.isInclusive);

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

    return bankersRound({ value: inclusiveTax });
  };

// ============================================== //
// === CALCULATE ORDER CHECK ITEM  BASE PRICE === //
// ============================================== //
interface CalculateOrderCheckItemBasePriceApiParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}

type CalculateOrderCheckItemBasePriceApi = (
  params: CalculateOrderCheckItemBasePriceApiParams
) => number;

export const calculateOrderCheckItemBasePriceApi: CalculateOrderCheckItemBasePriceApi =
  ({ orderItem, orderCheckItem }) => {
    const { amount } = orderCheckItem;

    if (!isNumber(amount)) {
      throw new Error("Order item amount is missing");
    }

    const orderCheckItemAmount = calculateOrderCheckItemAmount({
      orderCheckItem,
    });
    const orderItemBasePrice = calculateOrderItemBasePrice({ orderItem });
    const orderItemModifiersPrice = calculateOrderItemModifiersPrice({
      modifiers: orderItem.modifiers || [],
    });
    const orderItemDiscountPrice = calculateOrderCheckItemDiscounts({
      orderCheckItem,
      orderItem,
    });
    const orderCheckItemPrice =
      (orderItemBasePrice + orderItemModifiersPrice - orderItemDiscountPrice) *
      orderCheckItemAmount;

    return orderCheckItemPrice;
  };

// ==================================================== //
// === CALCULATE ORDER CHECK ITEM CHARGE BASE PRICE === //
// ==================================================== //
interface CalculateOrderCheckItemTotalPriceApiParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}
type CalculateOrderCheckItemTotalPriceApi = (
  params: CalculateOrderCheckItemTotalPriceApiParams
) => number;

export const calculateOrderCheckItemTotalPriceApi: CalculateOrderCheckItemTotalPriceApi =
  ({ orderItem, orderCheckItem }) => {
    const { amount } = orderCheckItem;

    if (!isNumber(amount)) {
      throw new Error("Order item amount is missing");
    }

    const orderCheckItemBasePrice = calculateOrderCheckItemBasePriceApi({
      orderItem,
      orderCheckItem,
    });
    console.log("orderCheckItemBasePrice", orderCheckItemBasePrice);

    const inclusiveTax = calculateOrderCheckItemInclusiveTaxApi({
      orderCheckItemBasePrice,
      orderItemTaxes: orderItem.taxes || [],
    });

    return bankersRound({
      value: orderCheckItemBasePrice - inclusiveTax,
    });
  };
