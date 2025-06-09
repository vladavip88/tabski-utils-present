import React from "react";
import type { FC, ReactNode } from "react";

interface ListItemProps {
  label: string;
  amount?: number | string;
  value: string | number | ReactNode;
  unitPrice?: number | string;
  marked?: boolean;
  refund?: boolean;
  info?: boolean;
}

const ListItem: FC<ListItemProps> = ({
  label,
  amount,
  value,
  refund,
  marked = false,
  info = false,
  unitPrice,
}) => {
  const getTextColor = (): string => {
    if (marked) return "text-red-500";
    if (info) return "text-blue-500";
    if (refund) return "text-orange-500";
    return "text-gray-900";
  };

  const textColor = getTextColor();
  const labelOnly = !amount && !unitPrice && !value;

  return (
    <li className="flex justify-end gap-x-6 py-1 hover:bg-blue-100">
      <p className={`text-sm/6 font-semibold ${textColor} mr-auto`}>{label}</p>

      {!labelOnly && (
        <>
          <p
            className={`text-sm/6 font-semibold ${textColor} text-right w-[50px]`}
          >
            {amount}
          </p>

          <p
            className={`text-sm/6 font-semibold ${textColor} text-right w-[50px]`}
          >
            {unitPrice}
          </p>

          <p
            className={`${textColor} text-right ${
              info ? "w-[250px]" : "w-[50px]"
            }`}
          >
            {value}
          </p>
        </>
      )}
    </li>
  );
};

export default ListItem;
