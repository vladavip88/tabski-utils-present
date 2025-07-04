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
  calculateOrderCheckTipUi,
} from "@tabski-organization/tabski-utils";

import { calculateRefund } from '../customCalcs';

interface OrderCheckSummaryProps {
  order: any;
  orderCheck: any;
  showInfo: boolean;
}

const OrderCheckSummary: React.FC<OrderCheckSummaryProps> = ({
  order,
  orderCheck,
  showInfo,
}) => {
  const [tip, setTip] = React.useState<number>(0);
  const [refunds, setRefunds] = React.useState<{id: string, amount: number }[]>([{id: '', amount: 0}]);

  const handleTipChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = parseFloat(e.target.value);
    if (!isNaN(value)) {
      setTip(value);
    } else {
      setTip(0);
    }
  };
  return (
    <div>
      <ul role="list" className="divide-y divide-gray-300 bg-gray-50 p-2">
        <ListItem label="ORDER CHECK INFO" />
        <ListItem
          label="Order check subtotal (UI)"
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
            <div className="flex gap-4 mt-2">
                <div className="flex items-center">
                <label className="block mb-2 text-sm mr-2" style={{ minWidth: "100px" }}>Custom Tip:</label>
                <input
                  type="number"
                  placeholder="Custom tip"
                  value={tip}
                  onChange={handleTipChange}
                  className="w-full p-2 border border-gray-300 rounded mb-2"
                  style={{ maxWidth: "100px" }}
                />
                </div>
                <div className="flex items-center">
                <p className="ml-2">{calculateOrderCheckTipUi({
                  orderCheck,
                  orderItems: order.items,
                  tip,
                })}</p>
                </div>
            </div>
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
            {refunds.map((refund, index) => (
              <>
              <input 
                type="text" 
                value={refund.id} 
                onChange={(e) => setRefunds(refunds.map((r, i) => i === index ? {...r, id: e.target.value} : r))} 
                placeholder="Refund ID" 
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />  
              <input 
                type="number" 
                value={refund.amount} 
                onChange={(e) => setRefunds(refunds.map((r, i) => i === index ? {...r, amount: parseFloat(e.target.value)} : r))} 
                placeholder="Refund Amount" 
                className="w-full p-2 border border-gray-300 rounded mb-2"
              />
              </>
            ))}
            {refunds.map((item: any) => item.amount && item.id && (
              <ListItem
              label="REFUNDS"
              value={calculateRefund({
                order,
                orderCheck,
                orderCheckItemId: item.id,
                orderCheckItemAmount: item.amount,
              })}
              />
            ))}
          </>
        )}
      </ul>
    </div>
  );
};

export default OrderCheckSummary;
