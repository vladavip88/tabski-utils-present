import { isNumber } from "../../common/commonUtils";
import { validateOrderItemDynamicPrice } from "../../common/validations";

// Types
import type {
  
  OrderItemModifier_V2,
  OrderItem_V2,
} from "../../types/graphql";

import {
  OrderItemDynamicPriceTypes_V2,
} from "../../types/graphql";
// ========================================== //
// === CALCULATE ORDER ITEM DYNAMIC PRICE === //
// ========================================== //
interface CalculateOrderItemDynamicPriceParams {
  orderItem: Partial<OrderItem_V2>;
}
type CalculateOrderItemDynamicPrice = (
  params: CalculateOrderItemDynamicPriceParams
) => number;

export const calculateOrderItemDynamicPrice: CalculateOrderItemDynamicPrice = ({
  orderItem,
}) => {
  const { price, dynamicPrice } = orderItem;

  if (!isNumber(price)) {
    throw new Error("Order item price is missing");
  }

  if (!dynamicPrice) {
    return 0;
  }

  validateOrderItemDynamicPrice(dynamicPrice);

  const { type, amount } = dynamicPrice;
  let adjustedDynamicPrice = 0;

  switch (type) {
    case OrderItemDynamicPriceTypes_V2.IncreasedPercentage:
      adjustedDynamicPrice = Math.floor((price * amount) / 100);
      break;

    case OrderItemDynamicPriceTypes_V2.DecreasedPercentage:
      adjustedDynamicPrice = -Math.floor((price * amount) / 100);
      break;

    case OrderItemDynamicPriceTypes_V2.IncreasedAmount:
      adjustedDynamicPrice = amount;
      break;

    case OrderItemDynamicPriceTypes_V2.DecreasedAmount:
      adjustedDynamicPrice = -amount;
      break;

    default:
      throw new Error(`Unknown dynamic price type: ${type}`);
  }

  return adjustedDynamicPrice;
};

// ======================================= //
// === CALCULATE ORDER ITEM BASE PRICE === //
// ======================================= //
interface CalculateOrderItemBasePriceParams {
  orderItem: Partial<OrderItem_V2>;
}

type CalculateOrderItemBasePrice = (
  params: CalculateOrderItemBasePriceParams
) => number;

export const calculateOrderItemBasePrice: CalculateOrderItemBasePrice = ({
  orderItem,
}) => {
  const { price } = orderItem;

  if (!isNumber(price)) {
    throw new Error("Order item price is missing");
  }

  const adjustedDynamicPrice = calculateOrderItemDynamicPrice({ orderItem });

  return price + adjustedDynamicPrice;
};

// =========================================== //
// === CALCULATE ORDER ITEM SUBTOTAL PRICE === //
// =========================================== //
interface CalculateOrderItemSubtotalPriceParams {
  orderItem: Partial<OrderItem_V2>;
}
type CalculateOrderItemSubtotalPrice = (
  params: CalculateOrderItemSubtotalPriceParams
) => number;

export const calculateOrderItemSubtotalPrice: CalculateOrderItemSubtotalPrice =
  ({ orderItem }) => {
    const basePrice = calculateOrderItemBasePrice({ orderItem });
    const modifierPrice = calculateOrderItemModifiersPrice({
      modifiers: orderItem.modifiers || [],
    });

    return basePrice + modifierPrice;
  };

// =========================================== //
// === CALCULATE ORDER ITEM MODIFIER PRICE === //
// =========================================== //
interface CalculateOrderItemModifierPriceParams {
  modifier: Partial<OrderItemModifier_V2>;
}
type CalculateOrderItemModifierPrice = (
  params: CalculateOrderItemModifierPriceParams
) => number;

export const calculateOrderItemModifierPrice: CalculateOrderItemModifierPrice =
  ({ modifier }) => {
    if (!modifier.price) {
      return 0;
    }

    return modifier.price * (modifier.amount || 1);
  };

// ============================================ //
// === CALCULATE ORDER ITEM MODIFIERS PRICE === //
// ============================================ //
interface CalculateOrderItemModifiersPriceParams {
  modifiers: Partial<OrderItemModifier_V2>[];
}
type CalculateOrderItemModifiersPrice = (
  params: CalculateOrderItemModifiersPriceParams
) => number;

export const calculateOrderItemModifiersPrice: CalculateOrderItemModifiersPrice =
  ({ modifiers }) => {
    return modifiers.reduce((acc, modifier) => {
      return acc + calculateOrderItemModifierPrice({ modifier });
    }, 0);
  };
