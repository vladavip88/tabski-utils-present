import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderCheckSubtotalPriceUI,
  calculateOrderCheckDiscountsHashMapUI,
  calculateOrderCheckTaxesUI,
  calculateOrderCheckTaxesHashMapUI,
  calculateOrderCheckTotalPriceUI,
  calculateOrderCheckTaxesApi,
  calculateOrderCheckTotalPriceApi,
  calculateOrderCheckSubtotalPriceApi,
} from "@tabski-organization/tabski-utils";

interface OrderCheckSummaryProps {
  order: any;
  orderCheck: any;
  showInfo: boolean;
}

const OrderCheckSummary: React.FC<OrderCheckSummaryProps> = ({
  order,
  orderCheck,
  showInfo,
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
      <hr className="border-gray-500 border-1 " />

      <ListItem label="Order check tip" value={orderCheck.tip || "0"} />
      <ListItem label="Order check fee" value={order.fee || "0"} />
      <hr className="border-gray-500 border-1 " />
      <ListItem
        label="Order check taxes (UI)"
        value={
          calculateOrderCheckTaxesUI({
            orderCheck: orderCheck,
            orderItems: order.items,
          }) || "0"
        }
      />
      <ListItem label="Order check taxes hash map" />
      {calculateOrderCheckTaxesHashMapUI({
        orderCheck: orderCheck,
        orderItems: order.items,
      }).map((tax: any) => (
        <ListItem key={tax.id} label={tax.name} value={tax.price} />
      ))}
      <ListItem
        label="Order check total (UI)"
        value={calculateOrderCheckTotalPriceUI({ orderCheck, order })}
      />
      {showInfo && (
        <>
          <hr className="border-gray-500 border-1 " />
          <ListItem
            label="Order check subtotal (API)"
            value={calculateOrderCheckSubtotalPriceApi({
              orderItems: order.items,
              orderCheck,
            })}
            info
          />
          <ListItem
            label="Order check taxes (API)"
            value={calculateOrderCheckTaxesApi({
              orderCheck: orderCheck,
              orderItems: order.items,
            })}
            info
          />
          <ListItem
            label="Order check total (API)"
            value={calculateOrderCheckTotalPriceApi({
              order,
              orderCheck,
            })}
            info
          />
        </>
      )}
    </ul>
  </div>
);

export default OrderCheckSummary;
