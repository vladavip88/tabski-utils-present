import { useEffect, useState } from "react";

import { ORDER, ORDER_CHECKS } from "./mockData";

import JsonEditor from "./components/JsonEditor";
import Button from "./components/Button";
import OrderCheckItem from "./components/OrderCheckItem";
import OrderCheckSummary from "./components/OrderCheckSummary";
import OrderChecksSummary from "./components/OrderChecksSummary";

function App() {
  const [showInfo, setShowInfo] = useState(false);
  const [order, setOrder] = useState("");
  const [parsedOrder, setParsedOrder] = useState(ORDER);
  const [orderError, setOrderError] = useState("");
  const [orderCheck, setOrderCheck] = useState("");
  const [parsedOrderChecks, setParsedOrderChecks] = useState(ORDER_CHECKS);
  const [orderCheckError, setOrderCheckError] = useState("");

  const handleUpdate = () => {
    try {
      const parsedOrderData = JSON.parse(order);
      setParsedOrder(parsedOrderData);
      setOrderError("");
    } catch (error) {
      setOrderError((error as Error).message);
    }

    try {
      const parsedOrderCheckData = JSON.parse(orderCheck);
      setParsedOrderChecks(parsedOrderCheckData);
      setOrderCheckError("");
    } catch (error) {
      setOrderCheckError((error as Error).message);
    }
  };

  useEffect(() => {
    setOrder(JSON.stringify(ORDER, null, 2));
    setOrderCheck(JSON.stringify(ORDER_CHECKS, null, 2));
  }, []);

  const toggleShowInfo = () => setShowInfo((prev) => !prev);

  return (
    <div className="flex w-full min-h-screen">
      <div className="w-[50%] p-4 bg-gray-100">
        <JsonEditor
          label="Order Input"
          value={order}
          error={orderError}
          onChange={setOrder}
        />
        <JsonEditor
          label="Order Check Input"
          value={orderCheck}
          error={orderCheckError}
          onChange={setOrderCheck}
        />
        <div className="w-full flex space-x-4 mt-4">
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={toggleShowInfo}>
            {showInfo ? "Hide Info" : "Show Info"}
          </Button>
        </div>
      </div>

      <div className="w-[50%] p-4 bg-white">
        {parsedOrder &&
          parsedOrderChecks &&
          !orderError &&
          !orderCheckError && (
            <>
              {parsedOrderChecks.checks?.map((check) => (
                <div key={check.id} >
                  <h5 className="text-xl font-bold  my-4">
                    ORDER CHECK ({check.id})
                  </h5>
                  <OrderCheckItem
                    order={parsedOrder}
                    orderCheck={check}
                    showInfo={showInfo}
                  />
                  <OrderCheckSummary order={parsedOrder} orderCheck={check} />
                  <hr className="border-gray-800 border-2 mt-4" />
                </div>
              ))}
              <OrderChecksSummary
                order={parsedOrder}
                orderChecks={parsedOrderChecks.checks}
              />
            </>
          )}
      </div>
    </div>
  );
}

export default App;
