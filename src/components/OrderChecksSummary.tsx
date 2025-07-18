import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderChecksSubtotalPriceUI,
  calculateOrderChecksTotalDiscountsUI,
  calculateOrderChecksTotalTaxesUI,
  calculateOrderChecksTotalPriceUI,
} from "@tabski-organization/tabski-utils";

interface OrderChecksSummaryProps {
  order: any;
}

const OrderChecksSummary: React.FC<OrderChecksSummaryProps> = ({
  order,
}) => {
  console.log(order)
  console.log(calculateOrderChecksSubtotalPriceUI({ order }))
  return (
    <div>
      <hr className="border-gray-800 border-2 mb-4" />
      <ul role="list" className="divide-y divide-gray-300 bg-gray-50 p-2">
        <ListItem label="ORDER CHECKS INFO" />
        <ListItem
          label="Order Checks Subtotal"
          value={calculateOrderChecksSubtotalPriceUI({ order })}
        />
        <ListItem
          label="Order Checks Total Discounts"
          value={calculateOrderChecksTotalDiscountsUI({ order  })}
        />
        <ListItem
          label="Order Checks Total Taxes"
          value={calculateOrderChecksTotalTaxesUI({ order  })}
        />
        <ListItem
          label="Order Checks Total"
          value={calculateOrderChecksTotalPriceUI({ order  })}
        />
      </ul>
    </div>
  );
};

export default OrderChecksSummary;
