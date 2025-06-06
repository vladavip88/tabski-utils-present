import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderCheckSubtotalPriceUI,
  calculateOrderCheckDiscountsHashMapUI,
  calculateOrderCheckTaxesUI,
  calculateOrderCheckTotalPriceUI,
} from "@tabski-organization/tabski-utils";

interface OrderCheckSummaryProps {
  order: any;
  orderCheck: any;
}

const OrderCheckSummary: React.FC<OrderCheckSummaryProps> = ({
  order,
  orderCheck,
}) => (
  <div>
    <ul role="list" className="divide-y divide-gray-300 bg-gray-50 p-2">
      <ListItem label="ORDER CHECK INFO" />
      <ListItem
        label="Order check subtotal"
        value={calculateOrderCheckSubtotalPriceUI({
          orderCheckItems: orderCheck.items,
          orderItems: order.items,
        })}
      />
      {calculateOrderCheckDiscountsHashMapUI({
        orderCheck,
        orderItems: order.items,
      }).map((discount: any) => (
        <ListItem
          key={discount.id}
          marked
          label={`Order check discount: ${discount.name}`}
          value={discount.price}
        />
      ))}
      <ListItem
        label="Order check taxes"
        value={calculateOrderCheckTaxesUI({
          orderCheck: orderCheck,
          orderItems: order.items,
        })}
      />
      <ListItem label="Order check tip" value={orderCheck.tip} />
      <ListItem
        label="Order check total"
        value={calculateOrderCheckTotalPriceUI({ orderCheck, order })}
      />
    </ul>
  </div>
);

export default OrderCheckSummary;
