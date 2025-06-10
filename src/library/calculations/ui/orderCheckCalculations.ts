import type{
  OrderCheckItem_V2,
  OrderCheck_V2,
  OrderItem_V2,
  OrderItemTaxes_V2,
  Order_V2,
} from "../../types/graphql";

import { isNumber, bankersRound } from "../../common/commonUtils";
import {
  calculateOrderCheckItemAmount,
  calculateOrderCheckItemDiscount,
  calculateOrderCheckItemDiscounts,
  calculateOrderItemTaxPrice,
  calculateOrderCheckItemTaxes,
} from "../common/orderCheckCommonCalculations";
import {
  calculateOrderItemBasePrice,
  calculateOrderItemSubtotalPrice,
} from "../common/orderCommonCalculations";
import {
  filterVoidedOrderCheckItems,
  applyOrderCheckDiscountOnExistingCheckItems,
} from "../common/orderCheckCommonCalculations";

// ============================================= //
// === CALCULATE ORDER CHECK ITEM BASE PRICE === //
// ============================================= //
interface CalculateOrderCheckItemBasePriceUIParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}
type CalculateOrderCheckItemBasePriceUI = (
  params: CalculateOrderCheckItemBasePriceUIParams
) => number;

export const calculateOrderCheckItemBasePriceUI: CalculateOrderCheckItemBasePriceUI =
  ({ orderItem, orderCheckItem }) => {
    const { amount } = orderCheckItem;

    if (!isNumber(amount)) {
      throw new Error("Order item amount is missing");
    }

    const unitPrice = calculateOrderItemBasePrice({ orderItem });

    return amount * unitPrice;
  };

// ============================================== //
// === CALCULATE ORDER CHECK ITEM TOTAL PRICE === //
// ============================================== //
interface CalculateOrderCheckItemTotalPriceUIParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}
type CalculateOrderCheckItemTotalPriceUI = (
  params: CalculateOrderCheckItemTotalPriceUIParams
) => number;

export const calculateOrderCheckItemTotalPriceUI: CalculateOrderCheckItemTotalPriceUI =
  ({ orderItem, orderCheckItem }) => {
    const checkItemAmount = calculateOrderCheckItemAmount({ orderCheckItem });
    const orderItemSubtotalPrice = calculateOrderItemSubtotalPrice({
      orderItem,
    });

    const checkItemDiscountsPrice = calculateOrderCheckItemDiscounts({
      orderCheckItem,
      orderItem,
    });

    const total =
      checkItemAmount * (orderItemSubtotalPrice - checkItemDiscountsPrice);

    // return bankersRound({
    //   value: total,
    // });
    return total
  };

// =============================================== //
// === CALCULATE ORDER CHECK ITEM VOIDED PRICE === //
// =============================================== //
interface CalculateOrderCheckItemVoidedPriceUIParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}
type CalculateOrderCheckItemVoidedPriceUI = (
  params: CalculateOrderCheckItemVoidedPriceUIParams
) => number;

export const calculateOrderCheckItemVoidedPriceUI: CalculateOrderCheckItemVoidedPriceUI =
  ({ orderItem, orderCheckItem }) => {
    const voidAmount =
      (orderCheckItem.voidAmount || 0) + (orderCheckItem.voidPaidAmount || 0);
    const orderItemSubtotalPrice = calculateOrderItemSubtotalPrice({
      orderItem,
    });

    return voidAmount * orderItemSubtotalPrice;
  };

// ================================================= //
// === CALCULATE ORDER CHECK ITEM REFUNDED PRICE === //
// ================================================= //
interface CalculateOrderCheckItemRefundedPriceUIParams {
  orderItem: Partial<OrderItem_V2>;
  orderCheckItem: Partial<OrderCheckItem_V2>;
}
type CalculateOrderCheckItemRefundedPriceUI = (
  params: CalculateOrderCheckItemRefundedPriceUIParams
) => number;

export const calculateOrderCheckItemRefundedPriceUI: CalculateOrderCheckItemRefundedPriceUI =
  ({ orderItem, orderCheckItem }) => {
    const refundAmount =
      (orderCheckItem.refundAmount || 0) +
      (orderCheckItem.refundFailedAmount || 0);
    const orderItemSubtotalPrice = calculateOrderItemSubtotalPrice({
      orderItem,
    });

    return refundAmount * orderItemSubtotalPrice;
  };

// ============================================ //
// === CALCULATE ORDER CHECK SUBTOTAL PRICE === //
// ============================================ //
interface CalculateOrderCheckSubtotalPriceUIParams {
  orderCheckItems: Partial<OrderCheckItem_V2>[];
  orderItems: Partial<OrderItem_V2>[];
}

type CalculateOrderCheckSubtotalPriceUI = (
  params: CalculateOrderCheckSubtotalPriceUIParams
) => number;

export const calculateOrderCheckSubtotalPriceUI: CalculateOrderCheckSubtotalPriceUI =
  ({ orderCheckItems, orderItems }) => {
    return orderCheckItems.reduce((subtotal, orderCheckItem) => {
      const orderItem = orderItems.find(
        (item) => item.id === orderCheckItem.orderItemId
      );

      if (!orderItem) {
        throw new Error(
          `Order item with ID "${orderCheckItem.orderItemId}" not found for order check item`
        );
      }

      const orderCheckItemTotal = calculateOrderCheckItemTotalPriceUI({
        orderItem,
        orderCheckItem,
      });

      return subtotal + orderCheckItemTotal;
    }, 0);
  };

// ============================================= //
// === CALCULATE ORDER CHECK DISCOUNTS PRICE === //
// ============================================= //
interface CalculateOrderCheckDiscountsUIParams {
  orderCheck: Partial<OrderCheck_V2>;
  orderItems: Partial<OrderItem_V2>[];
}

type CalculateOrderCheckDiscountsUI = (
  params: CalculateOrderCheckDiscountsUIParams
) => number;

export const calculateOrderCheckDiscountsUI: CalculateOrderCheckDiscountsUI = ({
  orderCheck,
  orderItems,
}) => {
  const discounts = orderCheck.discounts ?? [];
  const orderCheckItems = orderCheck.items ?? [];

  if (discounts.length === 0 || orderCheckItems.length === 0) {
    return 0;
  }

  const orderCheckSubtotalPrice = calculateOrderCheckSubtotalPriceUI({
    orderCheckItems,
    orderItems,
  });

  return discounts.reduce((total, discount) => {
    // NOTE: Discount is calculated same for order check and order check item
    const discountPrice = calculateOrderCheckItemDiscount({
      discount,
      orderItemSubtotalPrice: orderCheckSubtotalPrice,
    });

    return (
      total + discountPrice
      // bankersRound({
      //   value: discountPrice,
      // })
    );
  }, 0);
};

// ================================================ //
// === CALCULATE ORDER CHECK DISCOUNTS HASH MAP === //
// ================================================ //
interface CalculateOrderCheckDiscountsHashMapUIParams {
  orderCheck: Partial<OrderCheck_V2>;
  orderItems: Partial<OrderItem_V2>[];
}

type CalculateOrderCheckDiscountsHashMapUI = (
  params: CalculateOrderCheckDiscountsHashMapUIParams
) => { id: string; price: number }[];

export const calculateOrderCheckDiscountsHashMapUI: CalculateOrderCheckDiscountsHashMapUI =
  ({ orderCheck, orderItems }) => {
    const discounts = orderCheck.discounts || [];
    const orderCheckItems = orderCheck.items || [];

    if (discounts.length === 0 || orderCheckItems.length === 0) {
      return [];
    }

    const orderCheckSubtotalPrice = calculateOrderCheckSubtotalPriceUI({
      orderCheckItems,
      orderItems,
    });

    return discounts.map((discount) => {
      // NOTE: Discount is calculated same for order check and order check item
      const discountPrice = calculateOrderCheckItemDiscount({
        discount,
        orderItemSubtotalPrice: orderCheckSubtotalPrice,
      });

      return {
        id: discount.id,
        name: discount.name,
        // price: bankersRound({ value: discountPrice }),
        price: discountPrice,
      };
    });
  };

// ===================================================== //
// === CALCULATE ORDER CHECK ITEM DISCOUNTS HASH MAP === //
// ===================================================== //
interface CalculateOrderCheckItemDiscountsHashMapUIParams {
  orderCheckItem: Partial<OrderCheckItem_V2>;
  orderItems: Partial<OrderItem_V2>[];
}
type CalculateOrderCheckItemDiscountsHashMapUI = (
  params: CalculateOrderCheckItemDiscountsHashMapUIParams
) => {
  id: string;
  name: string;
  price: number;
}[];
export const calculateOrderCheckItemDiscountsHashMapUI: CalculateOrderCheckItemDiscountsHashMapUI =
  ({ orderCheckItem, orderItems }) => {
    const orderItem = orderItems.find(
      (item) => item.id === orderCheckItem.orderItemId
    );

    if (!orderItem) {
      throw new Error(
        `Order item with ID "${orderCheckItem.orderItemId}" not found for order check item`
      );
    }

    const discounts = orderCheckItem.discounts || [];

    if (discounts.length === 0) return [];

    const orderCheckItemAmount = calculateOrderCheckItemAmount({
      orderCheckItem,
    });
    const orderItemSubtotalPrice = calculateOrderItemSubtotalPrice({
      orderItem,
    });

    return discounts.map((discount) => {
      const discountPrice = calculateOrderCheckItemDiscount({
        discount,
        orderItemSubtotalPrice,
      });

      return {
        id: discount.id,
        name: discount.name,
        // price: bankersRound({ value: orderCheckItemAmount * discountPrice }),
        price: orderCheckItemAmount * discountPrice,
      };
    });
  };

// ====================================== //
// === CALCULATE ORDER ITEM TAX PRICE === //
// ====================================== //
interface CalculateOrderItemTaxPriceUIParams {
  orderItemSubtotal: number;
  tax: Partial<OrderItemTaxes_V2>;
}

type CalculateOrderItemTaxPriceUI = (
  params: CalculateOrderItemTaxPriceUIParams
) => number;
export const calculateOrderItemTaxPriceUI: CalculateOrderItemTaxPriceUI = ({
  orderItemSubtotal,
  tax,
}) =>
  calculateOrderItemTaxPrice({
    orderItemSubtotal,
    tax,
  });

// ========================================= //
// === CALCULATE ORDER CHECK ITEM TAXES  === //
// ========================================= //
interface CalculateOrderCheckItemTaxesUIParams {
  orderItems: Partial<OrderItem_V2>[];
  orderCheck: Partial<OrderCheck_V2>;
  orderCheckItemId: string;
}

type CalculateOrderCheckItemTaxesUI = (
  params: CalculateOrderCheckItemTaxesUIParams
) => number;

export const calculateOrderCheckItemTaxesUI: CalculateOrderCheckItemTaxesUI = ({
  orderItems,
  orderCheck,
  orderCheckItemId,
}) =>
  calculateOrderCheckItemTaxes({
    orderItems,
    orderCheck,
    orderCheckItemId,
  });

// ========================================= //
// === CALCULATE ORDER CHECK TAXES PRICE === //
// ========================================= //
interface CalculateOrderCheckTaxesUIParams {
  orderItems: Partial<OrderItem_V2>[];
  orderCheck: Partial<OrderCheck_V2>;
}
type CalculateOrderCheckTaxesUI = (
  params: CalculateOrderCheckTaxesUIParams
) => number;

export const calculateOrderCheckTaxesUI: CalculateOrderCheckTaxesUI = ({
  orderItems,
  orderCheck,
}) => {
  const originalCheckItems = filterVoidedOrderCheckItems({
    orderCheckItems: orderCheck.items || [],
  });

  const finalCheckItems = (orderCheck.discounts || []).reduce(
    (items, discount) =>
      applyOrderCheckDiscountOnExistingCheckItems({
        orderCheckItems: items,
        orderItems,
        discount,
      }),
    originalCheckItems
  );

  // Build a lookup map to avoid repeated .find()
  const orderItemMap = new Map(orderItems.map((item) => [item.id, item]));

  const totalTax = finalCheckItems.reduce((sum, orderCheckItem) => {
    const orderItem = orderItemMap.get(orderCheckItem.orderItemId);

    if (!orderItem) {
      throw new Error(
        `Order item with ID "${orderCheckItem.orderItemId}" not found for check item`
      );
    }

    return (
      sum +
      calculateOrderCheckItemTaxesUI({
        orderItems,
        orderCheck,
        orderCheckItemId: orderCheckItem.id!,
      })
    );
  }, 0);

  return totalTax;
};

// ==================================================== //
// === ORDER CHECK ITEMS TAXES HASH MAP CALCULATION === //
// ==================================================== //
interface CalculateOrderCheckTaxesHashMapUIParams {
  orderCheck: Partial<OrderCheck_V2>;
  orderItems: Partial<OrderItem_V2>[];
}

type CalculateOrderCheckTaxesHashMapUI = (
  params: CalculateOrderCheckTaxesHashMapUIParams
) => {
  id: string;
  name: string;
  price: number;
}[];

export const calculateOrderCheckTaxesHashMapUI: CalculateOrderCheckTaxesHashMapUI =
  ({ orderCheck, orderItems }) => {
    if (!orderCheck.items?.length) return [];

    const originalCheckItems = filterVoidedOrderCheckItems({
      orderCheckItems: orderCheck.items || [],
    });

    const finalCheckItems = (orderCheck.discounts || []).reduce(
      (items, discount) =>
        applyOrderCheckDiscountOnExistingCheckItems({
          orderCheckItems: items,
          orderItems,
          discount,
        }),
      originalCheckItems
    );

    // Step 3: Create a fast lookup for order items by ID
    const orderItemMap = new Map(orderItems.map((item) => [item.id, item]));

    // Step 4: Accumulate taxes
    const taxesMap: Record<string, { name: string; amount: number }> = {};

    for (const finalCheckItem of finalCheckItems) {
      const orderItem = orderItemMap.get(finalCheckItem.orderItemId);
      if (!orderItem || !orderItem.taxes?.length) continue;

      const orderCheckItemAmount = calculateOrderCheckItemAmount({
        orderCheckItem: finalCheckItem,
      });
      const orderItemSubtotal = calculateOrderItemSubtotalPrice({
        orderItem,
      });
      const orderCheckItemDiscounts = calculateOrderCheckItemDiscounts({
        orderCheckItem: finalCheckItem,
        orderItem,
      });
      const taxableSubtotal = Math.max(
        0,
        orderItemSubtotal - orderCheckItemDiscounts
      );

      for (const tax of orderItem.taxes) {
        if (tax.isRemoved || tax.isInclusive) continue;

        const finalCheckItemTax = calculateOrderItemTaxPriceUI({
          tax,
          orderItemSubtotal: taxableSubtotal,
        });

        // const roundedAmount = bankersRound({
        //   value: orderCheckItemAmount * finalCheckItemTax,
        // });
        const roundedAmount = orderCheckItemAmount * finalCheckItemTax;

        if (taxesMap[tax.id]) {
          taxesMap[tax.id].amount += roundedAmount;
        } else {
          taxesMap[tax.id] = {
            name: tax.name,
            amount: roundedAmount,
          };
        }
      }
    }

    // Step 5: Return normalized summary array
    return Object.entries(taxesMap).map(([id, { name, amount }]) => ({
      id,
      name,
      price: amount,
    }));
  };

// ============================================//
// === ORDER CHECK TOTAL PRICE CALCULATION === //
// ============================================//
interface CalculateOrderCheckTotalPriceUIParams {
  orderCheck: Partial<OrderCheck_V2>;
  order: Partial<Order_V2>;
}
type CalculateOrderCheckTotalPriceUI = (
  params: CalculateOrderCheckTotalPriceUIParams
) => number;
export const calculateOrderCheckTotalPriceUI: CalculateOrderCheckTotalPriceUI =
  ({ orderCheck, order }) => {
    const orderItems = order.items || [];
    const orderCheckItems = orderCheck.items || [];
    const orderCheckSubtotalPrice = calculateOrderCheckSubtotalPriceUI({
      orderCheckItems,
      orderItems,
    });

    const discountsPrice = calculateOrderCheckDiscountsUI({
      orderCheck,
      orderItems,
    });

    const taxesPrice = calculateOrderCheckTaxesUI({
      orderItems,
      orderCheck,
    });

    return Math.max(
      orderCheckSubtotalPrice -
        discountsPrice +
        taxesPrice +
        (order.fee || 0) +
        (orderCheck.tip || 0),
      0
    );
  };

// =============================================== //
// === ORDER CHECKS SUBTOTAL PRICE CALCULATION === //
// =============================================== //
interface CalculateOrderChecksSubtotalPriceUIParams {
  orderChecks: Partial<OrderCheck_V2>[];
  order: Partial<Order_V2>;
}
type CalculateOrderChecksSubtotalPriceUI = (
  params: CalculateOrderChecksSubtotalPriceUIParams
) => number;
export const calculateOrderChecksSubtotalPriceUI: CalculateOrderChecksSubtotalPriceUI =
  ({ orderChecks, order }) => {
    if (!orderChecks || orderChecks.length === 0) return 0;

    return orderChecks.reduce((subtotal, orderCheck) => {
      const orderCheckItems = orderCheck.items || [];
      const orderItems = order.items || [];

      const checkSubtotal = calculateOrderCheckSubtotalPriceUI({
        orderCheckItems,
        orderItems,
      });

      return subtotal + checkSubtotal;
    }, 0);
  };

// ============================================ //
// === ORDER CHECKS TOTAL TAXES CALCULATION === //
// ============================================ //
interface CalculateOrderChecksTotalTaxesUIParams {
  orderChecks: Partial<OrderCheck_V2>[];
  order: Partial<Order_V2>;
}
type CalculateOrderChecksTotalTaxesUI = (
  params: CalculateOrderChecksTotalTaxesUIParams
) => number;
export const calculateOrderChecksTotalTaxesUI: CalculateOrderChecksTotalTaxesUI =
  ({ orderChecks, order }) => {
    if (!orderChecks || orderChecks.length === 0) return 0;

    return orderChecks.reduce((totalTax, orderCheck) => {
      const orderItems = order.items || [];

      const checkTax = calculateOrderCheckTaxesUI({
        orderItems,
        orderCheck,
      });

      return totalTax + checkTax;
    }, 0);
  };

// ================================================ //
// === ORDER CHECKS TOTAL DISCOUNTS CALCULATION === //
// ================================================ //
interface CalculateOrderChecksTotalDiscountsUIParams {
  orderChecks: Partial<OrderCheck_V2>[];
  order: Partial<Order_V2>;
}
type CalculateOrderChecksTotalDiscountsUI = (
  params: CalculateOrderChecksTotalDiscountsUIParams
) => number;
export const calculateOrderChecksTotalDiscountsUI: CalculateOrderChecksTotalDiscountsUI =
  ({ orderChecks, order }) => {
    if (!orderChecks || orderChecks.length === 0) return 0;

    return orderChecks.reduce((totalDiscount, orderCheck) => {
      const orderItems = order.items || [];

      const checkDiscount = calculateOrderCheckDiscountsUI({
        orderCheck,
        orderItems,
      });

      return totalDiscount + checkDiscount;
    }, 0);
  };

// ============================================ //
// === ORDER CHECKS TOTAL PRICE CALCULATION === //
// ============================================ //
interface CalculateOrderChecksTotalPriceUIParams {
  orderChecks: Partial<OrderCheck_V2>[];
  order: Partial<Order_V2>;
}
type CalculateOrderChecksTotalPriceUI = (
  params: CalculateOrderChecksTotalPriceUIParams
) => number;
export const calculateOrderChecksTotalPriceUI: CalculateOrderChecksTotalPriceUI =
  ({ orderChecks, order }) => {
    if (!orderChecks || orderChecks.length === 0) return 0;

    return orderChecks.reduce((totalPrice, orderCheck) => {
      const checkTotalPrice = calculateOrderCheckTotalPriceUI({
        orderCheck,
        order,
      });

      return totalPrice + checkTotalPrice;
    }, 0);
  };
