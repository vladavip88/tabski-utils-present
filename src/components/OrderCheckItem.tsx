import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderCheckItemBasePriceUI,
  calculateOrderCheckItemDiscountsHashMapUI,
  calculateOrderCheckItemTaxesUI,
  calculateOrderCheckItemTotalPriceUI,
} from "@tabski-organization/tabski-utils";

import {
  calculateOrderCheckItemInclusiveTaxApi,
  calculateOrderCheckItemBasePriceApi,
  calculateOrderCheckItemTotalPriceApi,
} from "../library/calculations/api/orderCheckCalculations";

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
  const checkItems = orderCheck.items;

  return (
    <>
      {checkItems.map((item: any) => {
        const orderItem = order.items.find(
          (i: any) => i.id === item.orderItemId
        );

        return (
          <div key={item.id} className="mb-4">
            <ul role="list" className="divide-y divide-gray-300 bg-gray-50 p-2">
              <ListItem label={`ORDER CHECK ITEM INFO (${item.orderItemId})`} />

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
                  value={Math.ceil(mod.price * (mod.amount || 1) * item.amount)}
                />
              ))}

              {showInfo && (
                <ListItem
                  info
                  label="Modifiers Total Price"
                  value={orderItem.modifiers.reduce(
                    (acc: number, mod: any) =>
                      acc +
                      Math.ceil(mod.price * (mod.amount || 1) * item.amount),
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
                    label="Total (without taxes - UI)"
                    value={calculateOrderCheckItemTotalPriceUI({
                      orderItem,
                      orderCheckItem: item,
                    })}
                  />

                  <ListItem
                    info
                    label="Total (without taxes - API)"
                    value={calculateOrderCheckItemTotalPriceApi({
                      orderItem,
                      orderCheckItem: item,
                    })}
                  />

                  <ListItem
                    info
                    label="Taxes (inclusive)"
                    value={calculateOrderCheckItemInclusiveTaxApi({
                      orderCheckItemBasePrice:
                        calculateOrderCheckItemBasePriceApi({
                          orderItem,
                          orderCheckItem: item,
                        }),
                      orderItemTaxes: orderItem.taxes || [],
                    })}
                  />

                  <ListItem
                    info
                    label="Taxes (exclusive - UI)"
                    value={calculateOrderCheckItemTaxesUI({
                      orderItem,
                      orderCheckItem: item,
                    })}
                  />

                  <ListItem
                    info
                    label="Taxes (exclusive - API)"
                    value={calculateOrderCheckItemTaxesUI({
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
