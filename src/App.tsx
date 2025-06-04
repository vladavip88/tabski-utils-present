import { useEffect, useState } from "react";
import Editor from "react-simple-code-editor";
import Prism from "prismjs";
import "prismjs/components/prism-json";
import "prismjs/themes/prism.css";
import {
  calculateOrderCheckItemBasePriceUI,
  calculateOrderCheckItemTaxesUI,
  calculateOrderCheckItemTotalPriceUI,
} from "@tabski-organization/tabski-utils";

const highlight = (code: string) =>
  Prism.highlight(code, Prism.languages.json, "json");

const ORDER = {
  id: "681dba0df2d434e0acf6ce58",
  additionalInfo: {
    scheduleAt: null,
    specialInstructions: "",
  },
  application: "CONSUMER",
  consumerContactInfo: null,
  consumerId: "clb0z1cmg0575bhmruuws7tun",
  consumerName: "vladimir",
  deliveryInfo: null,
  employeeId: null,
  employeeName: null,
  fee: 99,
  isOpenTab: false,
  items: [
    {
      acceptedKdsId: null,
      amount: 3,
      cashDiscount: 0,
      chitName: "Carbonara",
      delayedUntil: null,
      dynamicPrice: {
        id: "clwz0z1ov0001iqgilqwjrwc5",
        name: "Happy hour",
        type: "DECREASED_PERCENTAGE",
        amount: 10,
      },
      externalItemId: "6H9TKS1ETPZ90",
      itemKdsIds: [],
      itemPrinterIds: [],
      menuCategoryId: "cloo8g88i4477s9mrwpwouxtp",
      menuCategoryName: "Pastas",
      menuId: "clhg54dwo31829ydmr28hr1zoq",
      menuItemId: "cloo7c7mh0332qc161r9ipycm",
      modifiers: [
        {
          groupExternalId: null,
          externalId: null,
          groupName: "Condiments",
          name: "Sriracha",
          chitName: "Sriracha",
          price: 50,
        },
      ],
      name: "Carbonara",
      orderedByConsumerId: null,
      orderedByConsumerName: null,
      price: 400,
      priceTieredName: null,
      revenueCenter: "cl78yyrva89553lmri4aqqzzt",
      status: "IN_PROGRESS",
      tableKdsIds: [],
      tableName: "Urbanspace Table 1",
      tableOrderType: "Bar Pickup",
      tablePrinterIds: [],
      tableSection: "Main Section",
      taxes: [
        {
          amount: 10,
          externalId: "P8WM9RN2J552M",
          id: "cloo78qxz0144of1669v3clyr",
          isInclusive: false,
          isRemoved: false,
          name: "tax 1",
          type: "PERCENTAGE",
        },
      ],
      voidReason: null,
      id: "681dba0df2d434e0acf6ce59",
      createdAt: "2025-05-09T08:17:25.525+0000",
      updatedAt: "2025-05-09T08:17:25.525+0000",
    },
  ],
  merchantId: "cl78yyrut89323lmrexxfoo9p",
  multimerchantId: null,
  referenceId: "681DBA0DREMG",
  type: "DINE_IN",
  createdAt: "2025-05-09T08:17:25.526+0000",
  updatedAt: "2025-05-09T08:17:25.526+0000",
};
const ORDER_CHECK = {
  id: "681dba0df2d434e0acf6ce5a",
  checks: [
    {
      consumerId: "clb0z1cmg0575bhmruuws7tun",
      discounts: [],
      isPaid: false,
      items: [
        {
          amount: 2,
          discounts: [],
          orderItemId: "681dba0df2d434e0acf6ce59",
          refundAmount: 0,
          refundFailedAmount: 0,
          voidAmount: 0,
          id: "681dba15f2d434e0acf6ce60",
          createdAt: "2025-05-09T08:17:25.658+0000",
          updatedAt: "2025-05-09T08:17:25.658+0000",
        },
      ],
      paymentProvider: "CLOVER",
      paymentTransactions: [],
      referenceId: "681DBA0DESZP",
      tip: 100,
      id: "681dba15f2d434e0acf6ce5f",
      createdAt: "2025-05-09T08:17:25.658+0000",
      updatedAt: "2025-05-09T08:17:25.658+0000",
    },
  ],
  merchantId: "cl78yyrut89323lmrexxfoo9p",
  orderId: "681dba0df2d434e0acf6ce58",
  createdAt: "2025-05-09T08:17:25.659+0000",
  updatedAt: "2025-05-09T08:17:25.659+0000",
};

function App() {
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
            <div>
              <p className="text-lg font-semibold">
                CHECK ITEM BASE PRICE:{" "}
                {parsedOrderChecks.checks[0].items.map((item) =>
                  calculateOrderCheckItemBasePriceUI({
                    orderCheckItem: item,
                    orderItem: parsedOrder.items.find(
                      (orderItem) => orderItem.id === item.orderItemId
                    )! as any,
                  })
                )}
              </p>
              <p className="text-lg font-semibold">
                CHECK ITEM TAXES PRICE:{" "}
                {parsedOrderChecks.checks[0].items.map((item) =>
                  calculateOrderCheckItemTaxesUI({
                    orderCheckItem: item,
                    orderItem: parsedOrder.items.find(
                      (orderItem) => orderItem.id === item.orderItemId
                    )! as any,
                  })
                )}
              </p>
              <p className="text-lg font-semibold">
                CHECK ITEM TOTAL PRICE:{" "}
                {parsedOrderChecks.checks[0].items.map((item) =>
                  calculateOrderCheckItemTotalPriceUI({
                    orderCheckItem: item,
                    orderItem: parsedOrder.items.find(
                      (orderItem) => orderItem.id === item.orderItemId
                    )! as any,
                  })
                )}
              </p>
            </div>
          )}
      </div>
    </div>
  );
}

export default App;
