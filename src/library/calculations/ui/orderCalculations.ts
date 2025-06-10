import type { OrderItem_V2 } from "../../types/graphql";

import {
  calculateOrderItemBasePrice,
  calculateOrderItemSubtotalPrice,
} from "../common/orderCommonCalculations";

// ======================================= //
// === CALCULATE ORDER ITEM BASE PRICE === //
// ======================================= //
interface CalculateOrderItemBasePriceUIParams {
  orderItem: Partial<OrderItem_V2>;
}

type CalculateOrderItemBasePriceUI = (
  params: CalculateOrderItemBasePriceUIParams
) => number;

export const calculateOrderItemBasePriceUI: CalculateOrderItemBasePriceUI = ({
  orderItem,
}) =>
  calculateOrderItemBasePrice({
    orderItem,
  });

// =========================================== //
// === CALCULATE ORDER ITEM SUBTOTAL PRICE === //
// =========================================== //
interface CalculateOrderItemSubtotalPriceUIParams {
  orderItem: Partial<OrderItem_V2>;
}
type CalculateOrderItemSubtotalPriceUI = (
  params: CalculateOrderItemSubtotalPriceUIParams
) => number;

export const calculateOrderItemSubtotalPriceUI: CalculateOrderItemSubtotalPriceUI =
  ({ orderItem }) =>
    calculateOrderItemSubtotalPrice({
      orderItem,
    });
