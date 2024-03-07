"use client";

import clsx from "clsx";
import { PropsWithChildren } from "react";
import Icon from "./Icon";

type Props = {
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
  outline?: boolean;
  rounded?: boolean;
  small?: boolean;
  preIcon?: string;
  postIcon?: string;
  onClick?: () => void;
};

function Button({
  type = "button",
  className,
  children,
  disabled,
  outline,
  rounded,
  small,
  preIcon,
  postIcon,
  onClick,
}: PropsWithChildren<Props>) {
  return (
    <button
      type={type}
      className={clsx(
        "flex items-center gap-1 bg-[#4880FF] rounded-lg text-white text-[14px] font-bold",
        outline && "!bg-transparent !text-[#4880FF] border-2 border-[#4880FF]",
        rounded && "!rounded-full",
        !small && "px-6 py-3",
        small && "px-3 py-1 !text-[12px]",
        disabled && "!bg-gray-200 hover:cursor-not-allowed",
        className
      )}
      onClick={onClick}
      disabled={disabled}
    >
      {preIcon && <Icon name={preIcon} className="w-3 h-3" />}
      {children}
      {postIcon && <Icon name={postIcon} className="w-3 h-3" />}
    </button>
  );
}

export default Button;
