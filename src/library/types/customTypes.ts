import {
  Order as OrderType,
  OrderItem,
  OrderCheck as OrderCheckType,
  OrderCheckItem as OrderCheckItemType,
  OrderCheckConsumerItem,
} from "./graphql";

export enum MerchantCashDiscountRounding {
  NONE = "NONE",
  POINT_ZERO_FIVE = "POINT_ZERO_FIVE",
}

export type Order = Omit<
  Partial<OrderType>,
  "items" | "paymentTransactions"
> & {
  items?: Partial<OrderItem>[];
};

type OrderCheckItem = Omit<OrderCheckItemType, "items"> & {
  items?: Partial<OrderCheckConsumerItem>[];
};

export type OrderCheck = Omit<Partial<OrderCheckType>, "checks"> & {
  checks?: Partial<OrderCheckItem>[];
};
