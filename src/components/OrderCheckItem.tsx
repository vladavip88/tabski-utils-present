import React from "react";
import ListItem from "./ListItem";
import {
  calculateOrderCheckItemAmount,
  calculateOrderCheckItemBasePriceUI,
  calculateOrderCheckItemDiscountsHashMapUI,
  calculateOrderCheckItemRefundedPriceUI,
  calculateOrderCheckItemTaxesUI,
  calculateOrderCheckItemTotalPriceUI,
  calculateOrderCheckItemVoidedPriceUI,
  calculateOrderCheckItemInclusiveTaxApi,
  calculateOrderCheckItemBasePriceApi,
  calculateOrderCheckItemTotalPriceApi,
  calculateOrderCheckItemTaxesApi,
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
                  value={Math.ceil(
                    mod.price *
                      (mod.amount || 1) *
                      calculateOrderCheckItemAmount({ orderCheckItem: item })
                  )}
                />
              ))}

              {showInfo && (
                <ListItem
                  info
                  label="Modifiers Total Price"
                  value={orderItem.modifiers.reduce(
                    (acc: number, mod: any) =>
                      acc +
                      Math.ceil(
                        mod.price *
                          (mod.amount || 1) *
                          calculateOrderCheckItemAmount({
                            orderCheckItem: item,
                          })
                      ),
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

              <ListItem
                refund
                label={`Refunded Price ${
                  item.refundAmount + item.refundFailedAmount
                } (UI)`}
                value={calculateOrderCheckItemRefundedPriceUI({
                  orderItem,
                  orderCheckItem: item,
                })?.toString()}
              />
              <ListItem
                refund
                label={`Voided Price  ${
                  item.voidAmount + item.voidPaidAmount
                } (UI)`}
                value={calculateOrderCheckItemVoidedPriceUI({
                  orderItem,
                  orderCheckItem: item,
                })?.toString()}
              />

              {showInfo && (
                <>
                  <ListItem
                    info
                    label="Total (without taxes - UI)"
                    value={calculateOrderCheckItemTotalPriceUI({
                      orderItem,
                      orderCheckItem: item,
                    })?.toString()}
                  />

                  <ListItem
                    info
                    label="Taxes (exclusive - UI)"
                    value={calculateOrderCheckItemTaxesUI({
                      orderItem,
                      orderCheckItem: item,
                    })?.toString()}
                  />

                  <hr className="border-gray-500 border-1 " />

                  <ListItem
                    info
                    label="Total (without taxes - API)"
                    value={calculateOrderCheckItemTotalPriceApi({
                      orderItem,
                      orderCheckItem: item,
                    })?.toString()}
                  />

                  <ListItem
                    info
                    label="Taxes (inclusive - API)"
                    value={calculateOrderCheckItemInclusiveTaxApi({
                      orderCheckItemBasePrice:
                        calculateOrderCheckItemBasePriceApi({
                          orderItem,
                          orderCheckItem: item,
                        }),
                      orderItemTaxes: orderItem.taxes || [],
                    })?.toString()}
                  />

                  <ListItem
                    info
                    label="Taxes (exclusive - API)"
                    value={calculateOrderCheckItemTaxesApi({
                      orderItem,
                      orderCheckItem: item,
                    })?.toString()}
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
