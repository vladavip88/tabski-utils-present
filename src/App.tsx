import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
import {
  calculateOrderCheckItemBasePriceUI,
  calculateOrderCheckItemTaxesUI,
  calculateOrderCheckItemTotalPriceUI,
  calculateOrderCheckItemRefundedPriceUI,
  calculateOrderCheckItemVoidedPriceUI,
  calculateOrderCheckSubtotalPriceUI,
  calculateOrderCheckTaxesUI,
  calculateOrderCheckDiscountsHashMapUI,
  calculateOrderCheckTotalPriceUI,
  calculateOrderCheckDiscountsUI,
  calculateOrderCheckItemDiscountsHashMapUI,
  calculateOrderChecksSubtotalPriceUI,
  calculateOrderChecksTotalTaxesUI,
  calculateOrderChecksTotalDiscountsUI,
  calculateOrderChecksTotalPriceUI,
} from "@tabski-organization/tabski-utils";

const highlight = (code: string) =>
  Prism.highlight(code, Prism.languages.json, "json");

const ORDER = {
  consumerId: "clb0z1cmg0575bhmruuws7tun",
  consumerName: "vladimir",
  createdAt: "2025-06-04T07:43:23.193Z",
  employeeId: null,
  employeeName: null,
  fee: 99,
  id: "683ff913abc7c9f777a28513",
  isOpenTab: false,
  merchantId: "cl78yyrut89323lmrexxfoo9p",
  multimerchantId: null,
  referenceId: "683FF913UZVS",
  type: "DINE_IN",
  updatedAt: "2025-06-04T07:43:23.193Z",
  application: "CONSUMER",
  items: [
    {
      acceptedKdsId: null,
      amount: 3,
      cashDiscount: 0,
      chitName: "Lentils bolognese",
      createdAt: "2025-06-04T07:43:23.192Z",
      delayedUntil: null,
      externalItemId: null,
      id: "683ff913abc7c9f777a28514",
      itemKdsIds: ["clpr2tmxa13765anmphr1ebhlu"],
      itemPrinterIds: [],
      menuCategoryId: "cm1g7f7kc006v8gq7546k3lyy",
      menuCategoryName: "House Specials",
      menuId: "clpqw9gwc6734anmparkklvhr",
      menuItemId: "cm1g7n7ix00718gq7tyrlt9di",
      modifiers: [
        {
          amount: 1,
          cashDiscount: 0,
          chitName: "Chicken",
          externalId: null,
          groupExternalId: null,
          groupName: "Special extras",
          name: "Chicken",
          price: 99,
        },
        {
          amount: 1,
          cashDiscount: 0,
          chitName: "Beef",
          externalId: null,
          groupExternalId: null,
          groupName: "Special extras",
          name: "Beef",
          price: 99,
        },
        {
          amount: 1,
          cashDiscount: 0,
          chitName: "Cheese",
          externalId: null,
          groupExternalId: null,
          groupName: "Special extras",
          name: "Cheese",
          price: 99,
        },
        {
          amount: 1,
          cashDiscount: 0,
          chitName: "Mustard",
          externalId: null,
          groupExternalId: null,
          groupName: "Pizza extras",
          name: "Mustard",
          price: 0,
        },
      ],
      name: "Lentils bolognese",
      note: "",
      orderedByConsumerId: null,
      orderedByConsumerName: null,
      price: 500,
      priceTieredName: "",
      revenueCenter: "Food",
      status: "PENDING",
      tableKdsIds: ["clquyakay000wbn39zp5r356t"],
      tableName: "novi sto",
      tableOrderType: "Dine-in",
      tablePrinterIds: [],
      tableSection: "Main Dining",
      taxes: [
        {
          amount: 10,
          externalId: null,
          id: "clpr2s8o313566anmpbeu6vg9q",
          isInclusive: false,
          isRemoved: false,
          name: "Food and Drink",
          type: "PERCENTAGE",
        },
      ],
      updatedAt: "2025-06-04T07:43:23.192Z",
      voidReason: null,
      dynamicPrice: null,
    },
    {
      acceptedKdsId: null,
      amount: 2,
      cashDiscount: 0,
      chitName: "Coconut chickpeas",
      createdAt: "2025-06-04T07:43:23.193Z",
      delayedUntil: null,
      externalItemId: null,
      id: "683ff913abc7c9f777a28515",
      itemKdsIds: ["clpr2tmxa13765anmphr1ebhlu"],
      itemPrinterIds: [],
      menuCategoryId: "cm1g7f7kc006v8gq7546k3lyy",
      menuCategoryName: "House Specials",
      menuId: "clpqw9gwc6734anmparkklvhr",
      menuItemId: "cm1g7j229006z8gq7bt6o56ov",
      modifiers: [],
      name: "Coconut chickpeas",
      note: "",
      orderedByConsumerId: null,
      orderedByConsumerName: null,
      price: 999,
      priceTieredName: "",
      revenueCenter: "Food",
      status: "PENDING",
      tableKdsIds: ["clquyakay000wbn39zp5r356t"],
      tableName: "novi sto",
      tableOrderType: "Dine-in",
      tablePrinterIds: [],
      tableSection: "Main Dining",
      taxes: [
        {
          amount: 10,
          externalId: null,
          id: "clpr2s8o313566anmpbeu6vg9q",
          isInclusive: false,
          isRemoved: false,
          name: "Food and Drink",
          type: "PERCENTAGE",
        },
      ],
      updatedAt: "2025-06-04T07:43:23.193Z",
      voidReason: null,
      dynamicPrice: null,
    },
    {
      acceptedKdsId: null,
      amount: 4,
      cashDiscount: 0,
      chitName: "Falafel bowl",
      createdAt: "2025-06-04T07:43:23.193Z",
      delayedUntil: null,
      externalItemId: null,
      id: "683ff913abc7c9f777a28516",
      itemKdsIds: ["clpr2tmxa13765anmphr1ebhlu"],
      itemPrinterIds: [],
      menuCategoryId: "cm1g7f7kc006v8gq7546k3lyy",
      menuCategoryName: "House Specials",
      menuId: "clpqw9gwc6734anmparkklvhr",
      menuItemId: "cm1g7gsdz006x8gq7sk69yo37",
      modifiers: [],
      name: "Falafel bowl",
      note: "",
      orderedByConsumerId: null,
      orderedByConsumerName: null,
      price: 1100,
      priceTieredName: "",
      revenueCenter: "Food",
      status: "PENDING",
      tableKdsIds: ["clquyakay000wbn39zp5r356t"],
      tableName: "novi sto",
      tableOrderType: "Dine-in",
      tablePrinterIds: [],
      tableSection: "Main Dining",
      taxes: [
        {
          amount: 10,
          externalId: null,
          id: "cm7mep2ko00z5zizgefakt4tc",
          isInclusive: true,
          isRemoved: false,
          name: "inclusive percentage",
          type: "PERCENTAGE",
        },
      ],
      updatedAt: "2025-06-04T07:43:23.193Z",
      voidReason: null,
      dynamicPrice: null,
    },
  ],
};
const ORDER_CHECK = {
  id: "683ff913abc7c9f777a28517",
  checks: [
    {
      consumerId: "clb0z1cmg0575bhmruuws7tun",
      discounts: [
        {
          amount: 200,
          id: "cly5wa7ds01zygebomibmdk6y",
          name: "test 123123",
          type: "FIXED_AMOUNT_OFF",
        },
        {
          amount: 10,
          id: "clx8ytk9f0001re77cs8gfi9x",
          name: "vlada test",
          type: "FIXED_PERCENTAGE_OFF",
        },
      ],
      items: [
        {
          amount: 3,
          discounts: [
            {
              amount: 200,
              id: "cly5wa7ds01zygebomibmdk6y",
              name: "test 123123",
              type: "FIXED_AMOUNT_OFF",
            },
            {
              amount: 10,
              id: "clx8ytk9f0001re77cs8gfi9x",
              name: "vlada test",
              type: "FIXED_PERCENTAGE_OFF",
            },
          ],
          orderItemId: "683ff913abc7c9f777a28514",
          refundAmount: 0,
          refundFailedAmount: 0,
          voidAmount: 0,
          voidPaidAmount: 0,
          id: "683ff91babc7c9f777a2851f",
          createdAt: "2025-06-04T07:43:23.349+0000",
          updatedAt: "2025-06-04T07:43:23.349+0000",
        },
        {
          amount: 2,
          discounts: [
            {
              amount: 200,
              id: "cly5wa7ds01zygebomibmdk6y",
              name: "test 123123",
              type: "FIXED_AMOUNT_OFF",
            },
            {
              amount: 10,
              id: "clx8ytk9f0001re77cs8gfi9x",
              name: "vlada test",
              type: "FIXED_PERCENTAGE_OFF",
            },
          ],
          orderItemId: "683ff913abc7c9f777a28515",
          refundAmount: 0,
          refundFailedAmount: 0,
          voidAmount: 0,
          voidPaidAmount: 0,
          id: "683ff91babc7c9f777a28520",
          createdAt: "2025-06-04T07:43:23.350+0000",
          updatedAt: "2025-06-04T07:43:23.350+0000",
        },
        {
          amount: 4,
          discounts: [
            {
              amount: 200,
              id: "cly5wa7ds01zygebomibmdk6y",
              name: "test 123123",
              type: "FIXED_AMOUNT_OFF",
            },
            {
              amount: 10,
              id: "clx8ytk9f0001re77cs8gfi9x",
              name: "vlada test",
              type: "FIXED_PERCENTAGE_OFF",
            },
          ],
          orderItemId: "683ff913abc7c9f777a28516",
          refundAmount: 0,
          refundFailedAmount: 0,
          voidAmount: 0,
          voidPaidAmount: 0,
          id: "683ff91babc7c9f777a28521",
          createdAt: "2025-06-04T07:43:23.350+0000",
          updatedAt: "2025-06-04T07:43:23.350+0000",
        },
      ],
      paymentProvider: "CLOVER",
      paymentStatus: "NONE",
      paymentTransactions: [],
      referenceId: "683FF913VEGW",
      tip: 100,
      id: "683ff91babc7c9f777a2851e",
      createdAt: "2025-06-04T07:43:23.350+0000",
      updatedAt: "2025-06-04T07:43:23.350+0000",
    },
  ],
  merchantId: "cl78yyrut89323lmrexxfoo9p",
  orderId: "683ff913abc7c9f777a28513",
  createdAt: "2025-06-04T07:43:23.350+0000",
  updatedAt: "2025-06-04T07:43:23.350+0000",
};

const ListItem = ({ label, amount, value, marked }) => (
  <li className="flex justify-end gap-x-6 py-1 hover:bg-blue-100">
    <p className="text-sm/6 font-semibold text-gray-900 mr-auto">{label}</p>
    {amount && (
      <p
        className={`text-sm/6 font-semibold ${
          marked ? "text-red-500" : "text-gray-900 w-[50px]"
        } text-right`}
      >
        {amount}
      </p>
    )}
    <p
      className={`${
        marked ? "text-red-500" : "text-gray-900 w-[50px]"
      } w-[250px] text-right`}
    >
      {value}
    </p>
  </li>
);

function App() {
  const [showIds, setShowIds] = useState(false);
  const [order, setOrder] = useState(JSON.stringify(ORDER, null, 2));
  const [parsedOrder, setParsedOrder] = useState(null);
  const [orderError, setOrderError] = useState("");
  const [orderCheck, setOrderCheck] = useState(
    JSON.stringify(ORDER_CHECK, null, 2)
  );
  const [parsedOrderChecks, setParsedOrderChecks] = useState(null);
  const [orderCheckError, setOrderCheckError] = useState("");

  const handleChange = (value: string, type: "order" | "orderCheck") => {
    // Reset errors
    if (type === "order") setOrderError("");
    else setOrderCheckError("");
    // Validate JSON input
    if (type === "order") setOrder(value);
    else setOrderCheck(value);

    try {
      const parsed = JSON.parse(value);
      if (type === "order") setParsedOrder(parsed);
      else setParsedOrderChecks(parsed);
    } catch {
      if (type === "order") setOrderError(`${type} is not valid JSON`);
      else setOrderCheckError(`${type} is not valid JSON`);
    }
  };

  const handleOnToggleShowIds = () => {
    setShowIds((prev) => !prev);
  };

  useEffect(() => {
    handleChange(JSON.stringify(ORDER, null, 2), "order");
    handleChange(JSON.stringify(ORDER_CHECK, null, 2), "orderCheck");
  }, []);

  return (
    <div className="flex w-full min-h-screen">
      {/* Left Column */}
      <div className="w-[50%] p-4  bg-gray-100">
        <label className="block text-sm font-medium text-gray-700">
          Order Input
        </label>

        <div className="border border-gray-300 overflow-auto max-h-[400px]">
          <Editor
            value={order}
            onValueChange={(code) => handleChange(code, "order")}
            highlight={highlight}
            padding={10}
            className="w-full text-sm font-mono bg-white"
          />
        </div>
        {orderError && (
          <p className="text-red-500 text-sm -mt-2">{orderError}</p>
        )}

        <label className="block text-sm pt-10 font-medium text-gray-700">
          Order Check Input
        </label>
        <div className="border border-gray-300 overflow-auto max-h-[400px]">
          <Editor
            value={orderCheck}
            onValueChange={(code) => handleChange(code, "orderCheck")}
            highlight={highlight}
            padding={10}
            className="w-full text-sm font-mono bg-white"
          />
        </div>
        {orderCheckError && (
          <p className="text-red-500 text-sm -mt-2">{orderCheckError}</p>
        )}
      </div>

      {/* Right Column */}
      <div className="w-[50%] p-4 bg-white">
        {parsedOrder &&
          parsedOrderChecks &&
          !orderError &&
          !orderCheckError && (
            <>
              <div>
                <button
                  onClick={handleOnToggleShowIds}
                  type="button"
                  className="rounded-sm bg-indigo-600 px-2 py-1 text-xs font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                >
                  {showIds ? "Hide IDs" : "Show IDs"}
                </button>

                {parsedOrderChecks.checks[0].items.map((item) => {
                  const orderItem = parsedOrder.items.find(
                    (i) => i.id === item.orderItemId
                  );

                  return (
                    <div key={item.id} className="mb-4">
                      <ul
                        role="list"
                        className="divide-y divide-gray-300 bg-gray-50 p-2"
                      >
                        {showIds && (
                          <>
                            <ListItem
                              label="Order Item ID"
                              value={item.orderItemId}
                            />
                            <ListItem
                              label="Order Check Item ID"
                              value={item.id}
                            />
                          </>
                        )}
                        <ListItem
                          label={orderItem.name}
                          amount={item.amount}
                          value={calculateOrderCheckItemBasePriceUI({
                            orderCheckItem: item,
                            orderItem,
                          })}
                        />
                        {orderItem.modifiers.map((modifier) => (
                          <ListItem
                            key={modifier.name}
                            label={`Modifier: ${modifier.name}`}
                            amount={modifier.amount}
                            value={modifier.price * (modifier.amount || 1)}
                          />
                        ))}

                        {calculateOrderCheckItemDiscountsHashMapUI({
                          orderCheckItem: item,
                          orderItems: parsedOrder.items,
                        }).map((discount) => (
                          <ListItem
                            key={discount.id}
                            marked
                            label={`Discount: ${discount.name}`}
                            value={discount.price}
                          />
                        ))}
                      </ul>
                    </div>
                  );
                })}
              </div>
              <div>
                <hr className="border-gray-800 border-2 mb-4" />
                <ul
                  role="list"
                  className="divide-y divide-gray-300 bg-gray-50 p-2"
                >
                  <ListItem
                    label="Order check subtotal"
                    value={calculateOrderCheckSubtotalPriceUI({
                      orderCheckItems: parsedOrderChecks.checks[0].items,
                      orderItems: parsedOrder.items,
                    })}
                  />
                  {calculateOrderCheckDiscountsHashMapUI({
                    orderCheck: parsedOrderChecks.checks[0],
                    orderItems: parsedOrder.items,
                  }).map((discount) => (
                    <ListItem
                      key={discount.id}
                      marked
                      label={`Order check discount: ${discount.name}`}
                      value={discount.price}
                    />
                  ))}

                  <ListItem
                    label="Order check texes"
                    value={calculateOrderCheckTaxesUI({
                      orderCheck: parsedOrderChecks.checks[0],
                      orderItems: parsedOrder.items,
                    })}
                  />
                  <ListItem
                    label="Order check tip"
                    value={parsedOrderChecks.checks[0].tip}
                  />
                  <ListItem
                    label="Order check total"
                    value={calculateOrderCheckTotalPriceUI({
                      orderCheck: parsedOrderChecks.checks[0],
                      order: parsedOrder,
                    })}
                  />
                </ul>
              </div>
              <hr className="border-gray-800 border-2 mb-4" />
              <ul
                role="list"
                className="divide-y divide-gray-300 bg-gray-50 p-2"
              >
                <ListItem
                  label="Order Checks Subtotal"
                  value={calculateOrderChecksSubtotalPriceUI({
                    orderChecks: parsedOrderChecks.checks,
                    order: parsedOrder,
                  })}
                />
                <ListItem
                  label="Order Checks Total Discounts"
                  value={calculateOrderChecksTotalDiscountsUI({
                    orderChecks: parsedOrderChecks.checks,
                    order: parsedOrder,
                  })}
                />
                <ListItem
                  label="Order Checks Total Taxes"
                  value={calculateOrderChecksTotalTaxesUI({
                    orderChecks: parsedOrderChecks.checks,
                    order: parsedOrder,
                  })}
                />
                <ListItem
                  label="Order Checks Total"
                  value={calculateOrderChecksTotalPriceUI({
                    orderChecks: parsedOrderChecks.checks,
                    order: parsedOrder,
                  })}
                />
              </ul>
            </>
          )}
      </div>
    </div>
  );
}

export default App;
