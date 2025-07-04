import { useEffect, useState } from "react";

import { ORDER } from "./mockData";

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
 

  const handleUpdate = () => {
    try {
      const parsedOrderData = JSON.parse(order);
      setParsedOrder(parsedOrderData);
      setOrderError("");
    } catch (error) {
      setOrderError((error as Error).message);
    }
  };

  useEffect(() => {
    setOrder(JSON.stringify(ORDER, null, 2));
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
        <div className="w-full flex space-x-4 mt-4">
          <Button onClick={handleUpdate}>Update</Button>
          <Button onClick={toggleShowInfo}>
            {showInfo ? "Hide Info" : "Show Info"}
          </Button>
        </div>
      </div>

      <div className="w-[50%] max-h-[100vh] p-4 bg-white overflow-y-auto">
        {parsedOrder && !orderError && (
          <>
            {parsedOrder.checks?.map((check) => (
              <div key={check.id}>
                <h5 className="text-xl font-bold  my-4">
                  ORDER CHECK ({check.id})
                </h5>
                  <OrderCheckItem
                    order={parsedOrder}
                    orderCheck={check}
                    showInfo={showInfo}
                  />
                  <OrderCheckSummary
                    order={parsedOrder}
                    orderCheck={check}
                    showInfo={showInfo}
                  />
                  <hr className="border-gray-800 border-2 mt-4" />
                </div>
              ))}
              <OrderChecksSummary
                order={parsedOrder}
              />
            </>
          )}
      </div>
    </div>
  );
}

export default App;
