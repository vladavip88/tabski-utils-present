import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderChecksSubtotalPriceUI,
  calculateOrderChecksTotalDiscountsUI,
  calculateOrderChecksTotalTaxesUI,
  calculateOrderChecksTotalPriceUI,
} from "../library";

interface OrderChecksSummaryProps {
  order: any;
  orderChecks: any[];
}

const OrderChecksSummary: React.FC<OrderChecksSummaryProps> = ({
  order,
  orderChecks,
}) => {
  return (
    <div>
      <hr className="border-gray-800 border-2 mb-4" />
      <ul role="list" className="divide-y divide-gray-300 bg-gray-50 p-2">
        <ListItem label="ORDER CHECKS INFO" />
        <ListItem
          label="Order Checks Subtotal"
          value={calculateOrderChecksSubtotalPriceUI({ orderChecks, order })}
        />
        <ListItem
          label="Order Checks Total Discounts"
          value={calculateOrderChecksTotalDiscountsUI({ orderChecks, order })}
        />
        <ListItem
          label="Order Checks Total Taxes"
          value={calculateOrderChecksTotalTaxesUI({ orderChecks, order })}
        />
        <ListItem
          label="Order Checks Total"
          value={calculateOrderChecksTotalPriceUI({ orderChecks, order })}
        />
      </ul>
    </div>
  );
};

export default OrderChecksSummary;
