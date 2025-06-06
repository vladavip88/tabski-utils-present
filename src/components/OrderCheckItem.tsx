import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderCheckItemBasePriceUI,
  calculateOrderCheckItemDiscountsHashMapUI,
  calculateOrderCheckItemTaxesUI,
  calculateOrderCheckItemTotalPriceUI,
} from "@tabski-organization/tabski-utils";

interface OrderCheckItemProps {
  order: any;
  orderCheck: any;
  showInfo: boolean;
}

const OrderCheckItem: React.FC<OrderCheckItemProps> = ({
  order,
  orderCheck,
  showInfo,
}) => {
  const checkItems = orderCheck.checks[0].items;

  return (
    <>
      {checkItems.map((item: any) => {
        const orderItem = order.items.find(
          (i: any) => i.id === item.orderItemId
        );

        return (
          <div key={item.id} className="mb-4">
            <ul role="list" className="divide-y divide-gray-300 bg-gray-50 p-2">
              <ListItem label="ORDER CHECK ITEM INFO" />
              {showInfo && (
                <>
                  <ListItem
                    info
                    label="Order Item ID"
                    value={item.orderItemId}
                  />
                  <ListItem info label="Order Check Item ID" value={item.id} />
                </>
              )}

              <ListItem
                label={orderItem.name}
                amount={item.amount}
                unitPrice={orderItem.price}
                value={calculateOrderCheckItemBasePriceUI({
                  orderCheckItem: item,
                  orderItem,
                })}
              />

              {orderItem.modifiers.map((mod: any) => (
                <ListItem
                  key={mod.name}
                  label={`Modifier: ${mod.name}`}
                  amount={mod.amount}
                  unitPrice={mod.price}
                  value={mod.price * (mod.amount || 1) * orderItem.amount}
                />
              ))}

              {showInfo && (
                <ListItem
                  info
                  label="Modifiers Total Price"
                  value={orderItem.modifiers.reduce(
                    (acc: number, mod: any) =>
                      acc + mod.price * (mod.amount || 1) * orderItem.amount,
                    0
                  )}
                />
              )}

              {calculateOrderCheckItemDiscountsHashMapUI({
                orderCheckItem: item,
                orderItems: order.items,
              }).map((discount: any) => (
                <ListItem
                  key={discount.id}
                  marked
                  label={`Discount: ${discount.name}`}
                  value={discount.price}
                />
              ))}

              {showInfo && (
                <>
                  <ListItem
                    info
                    label="Taxes"
                    value={calculateOrderCheckItemTaxesUI({
                      orderItem,
                      orderCheckItem: item,
                    })}
                  />
                  <ListItem
                    info
                    label="Total (without taxes)"
                    value={calculateOrderCheckItemTotalPriceUI({
                      orderItem,
                      orderCheckItem: item,
                    })}
                  />
                </>
              )}
            </ul>
          </div>
        );
      })}
    </>
  );
};

export default OrderCheckItem;
