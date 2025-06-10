import { isNumber } from "../../common/commonUtils";
import { validateDynamicPrice } from "../../common/validations";

import type { DynamicPrice,  MenuItem } from "../../types/graphql";
import  { DynamicPriceType, } from "../../types/graphql";

// ========================================= //
// === CALCULATE MENU ITEM DYNAMIC PRICE === //
// ========================================= //
interface CalculateMenuItemDynamicPriceParams {
  menuItem: Pick<MenuItem, "price">;
  dynamicPrice: Pick<DynamicPrice, "type" | "amount">;
}

type CalculateMenuItemDynamicPrice = (
  params: CalculateMenuItemDynamicPriceParams
) => number;

export const calculateMenuItemDynamicPrice: CalculateMenuItemDynamicPrice = ({
  menuItem,
  dynamicPrice,
}) => {
  const { price } = menuItem;
  const { type, amount } = dynamicPrice;

  const percentageAdjustment = Math.floor((price * amount) / 100);

  const adjustedPrice = (() => {
    switch (type) {
      case DynamicPriceType.IncreasedPercentage:
        return price + percentageAdjustment;
      case DynamicPriceType.DecreasedPercentage:
        return price - percentageAdjustment;
      case DynamicPriceType.IncreasedAmount:
        return price + amount;
      case DynamicPriceType.DecreasedAmount:
        return price - amount;
      default:
        return price;
    }
  })();

  return Math.max(adjustedPrice, 0);
};

// ==================================== //
// === CALCULATE MENU ITEM PRICE UI === //
// ==================================== //
interface CalculateMenuItemPriceUIParams {
  menuItem: Partial<MenuItem>;
  dynamicPrice?: Partial<DynamicPrice>;
}
type CalculateMenuItemPriceUI = (
  params: CalculateMenuItemPriceUIParams
) => number;

export const calculateMenuItemPriceUI: CalculateMenuItemPriceUI = ({
  menuItem,
  dynamicPrice,
}) => {
  const basePrice = isNumber(menuItem.price)
    ? menuItem.price
    : menuItem.priceTiered?.find((tier) => tier?.default)?.price;

  if (!isNumber(basePrice)) {
    throw new Error("Menu item price is missing");
  }

  if (!dynamicPrice) {
    return basePrice;
  }

  validateDynamicPrice(dynamicPrice);

  return calculateMenuItemDynamicPrice({
    menuItem: { price: basePrice },
    dynamicPrice,
  });
};
