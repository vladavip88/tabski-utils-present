import {

  DynamicPriceType,

  OrderChecksDiscountTypes_V2,
 
  OrderItemDynamicPriceTypes_V2,
} from "../types/graphql";
import type {
  DynamicPrice,

  OrderCheckDiscount_V2,

  OrderItemDynamicPrice_V2,
} from "../types/graphql";
import { isNumber } from "./commonUtils";

// ============================== //
// === VALIDATE DYNAMIC PRICE === //
// ============================== //
export function validateDynamicPrice(
  dynamicPrice: Partial<DynamicPrice>
): asserts dynamicPrice is Required<Pick<DynamicPrice, "type" | "amount">> {
  if (!dynamicPrice.type) {
    throw new Error("Dynamic price type is missing");
  }

  if (!isNumber(dynamicPrice.amount)) {
    throw new Error("Dynamic price amount is missing");
  }

  if (
    ![
      DynamicPriceType.IncreasedPercentage,
      DynamicPriceType.DecreasedPercentage,
      DynamicPriceType.IncreasedAmount,
      DynamicPriceType.DecreasedAmount,
    ].includes(dynamicPrice.type)
  ) {
    throw new Error(`Unknown dynamic price type: ${dynamicPrice.type}`);
  }
}

// ========================================= //
// === VALIDATE ORDER ITEM DYNAMIC PRICE === //
// ========================================= //
export function validateOrderItemDynamicPrice(
  dynamicPrice: Partial<OrderItemDynamicPrice_V2>
): asserts dynamicPrice is Required<
  Pick<OrderItemDynamicPrice_V2, "type" | "amount">
> {
  if (!isNumber(dynamicPrice.amount)) {
    throw new Error("Dynamic price amount is missing");
  }

  if (!dynamicPrice.type) {
    throw new Error("Dynamic price type is missing");
  }

  if (
    ![
      OrderItemDynamicPriceTypes_V2.IncreasedPercentage,
      OrderItemDynamicPriceTypes_V2.DecreasedPercentage,
      OrderItemDynamicPriceTypes_V2.IncreasedAmount,
      OrderItemDynamicPriceTypes_V2.DecreasedAmount,
    ].includes(dynamicPrice.type)
  ) {
    throw new Error(`Unknown dynamic price type: ${dynamicPrice.type}`);
  }
}

// ========================= //
// === VALIDATE DISCOUNT === //
// ========================= //
export function validateDiscount(
  discount: Partial<OrderCheckDiscount_V2>
): asserts discount is {
  amount: number;
  type: OrderChecksDiscountTypes_V2;
} {
  if (!discount.type) {
    throw new Error("Order discount type is missing");
  }

  if (!isNumber(discount.amount)) {
    throw new Error("Order discount amount is missing");
  }

  if (
    ![
      OrderChecksDiscountTypes_V2.FixedAmountOff,
      OrderChecksDiscountTypes_V2.FixedPercentageOff,
      OrderChecksDiscountTypes_V2.OpenAmountOff,
      OrderChecksDiscountTypes_V2.OpenPercentageOff,
    ].includes(discount.type)
  ) {
    throw new Error(`Unknown discount type: ${discount.type}`);
  }
}
