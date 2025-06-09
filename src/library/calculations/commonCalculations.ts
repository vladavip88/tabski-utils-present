import type { OrderCheck_V2, OrderItem_V2 } from "../types/graphql";
import { orderCheckItemAmount } from "./orderCheckItemCalculationsV2";

export const bankersRound = ({ value }: { value: number }): number => {
  const floorValue = Math.floor(value);
  const decimalPart = value - floorValue;
  const EPSILON = 1e-10;

  if (
    decimalPart > 0.5 ||
    (Math.abs(decimalPart - 0.5) < EPSILON && floorValue % 2 !== 0)
  ) {
    return floorValue + 1;
  }

  return floorValue;
};

export const isCheckFullyRefunded = ({
  orderCheck,
  itemsToRefund,
}: {
  orderCheck: Partial<OrderCheck_V2>;
  itemsToRefund?: { item: Partial<OrderItem_V2>; amount: number }[];
}) => {
  return orderCheck.items?.every((orderCheckItem) => {
    const itemAmount = orderCheckItemAmount({ orderCheckItem });
    const itemToRefundAmount =
      itemsToRefund?.find(
        (itemToRefund) => itemToRefund.item.id === orderCheckItem.orderItemId
      )?.amount || 0;

    return itemAmount - itemToRefundAmount === 0;
  });
};
