"use client";

import Icon from "./Icon";
import clsx from "clsx";
import { CardAnaliticProps } from "@/types";

function CardAnalitic({
  type,
  title,
  description,
  value,
  icon = "users",
}: CardAnaliticProps) {
  return (
    <div className="bg-white p-4 rounded-xl flex flex-col gap-6">
      <div className="flex justify-between items-center gap-16">
        <div className="flex flex-col gap-2">
          <h6 className="font-semibold text-md text-[#636466]">{title}</h6>
          <h4 className="font-extrabold text-[28px] text-[#202224]">{value}</h4>
        </div>
        <div
          className={clsx(
            "flex items-center justify-center bg-gray-200 rounded-xl p-3",
            type === "primary" && "!bg-[#8280FF]",
            type === "warning" && "!bg-[#FEC53D]",
            type === "success" && "!bg-[#4AD991]",
            type === "danger" && "!bg-[#FF9066]"
          )}
        >
          <Icon name={icon} className="w-6 h-6 stroke-white" />
        </div>
      </div>
      <h6 className="font-semibold text-md text-[#636466]">{description}</h6>
    </div>
  );
}

export default CardAnalitic;
