import { isNumber } from "../common/commonUtils";
import type {
  OrderCheckItem_V2,
} from "../types/graphql";

export const orderCheckItemAmount = ({
  orderCheckItem,
}: {
  orderCheckItem: Partial<OrderCheckItem_V2>;
}): number => {
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

