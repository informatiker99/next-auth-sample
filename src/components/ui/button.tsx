import React from "react";
import { cva } from "class-variance-authority";
import { cn } from "@/lib/utils";
// Define the button styles using `cva`
const button = cva(["font-semibold", "border", "rounded", "transition-all"], {
  variants: {
    intent: {
      primary: [
        "bg-blue-500",
        "text-white",
        "border-transparent rounded-md",
        "active:scale-95 transition duration-150 bg-blue-500 ",
      ],
      secondary: ["bg-white", "text-gray-800", "border-gray-400"],
    },
    size: {
      small: ["text-sm", "py-1", "px-2"],
      medium: ["text-base", "py-2", "px-4"],
      large: ["text-lg", "py-3", "px-6"],
    },

    disabled: {
      true: ["opacity-50", "cursor-not-allowed"],
      false: null,
    },
  },
  compoundVariants: [
    {
      intent: "primary",
      disabled: false,
      class: "hover:bg-blue-600",
    },
    {
      intent: "secondary",
      disabled: false,
      class: "hover:bg-gray-100",
    },
  ],
  defaultVariants: {
    intent: "primary",
    size: "medium",
    disabled: false,
  },
});

// Button component
const Button = ({
  intent,
  size,
  disabled,
  children,
  onClick,
  className,
  type = "button",
}: any) => {
  return (
    <button
      type={type}
      className={cn(button({ intent, size, disabled }), className)}
      onClick={disabled ? undefined : onClick} // Prevent click if disabled
      disabled={disabled}
    >
      {children}
    </button>
  );
};

export default Button;
