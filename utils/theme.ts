import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../theme";

// Variants
export type CloseButtonVariants = VariantProps<typeof closeButton> &
  Classes<typeof closeButton>;

export const closeButton = tv({
  base: "focus:outline-hidden whitespace-normal disabled:cursor-not-allowed disabled:opacity-50",
  variants: {
    color: {
      primary:
        "text-primary-500 focus:ring-primary-400 hover:bg-primary-200 dark:hover:bg-primary-800 dark:hover:text-primary-300",
      secondary:
        "text-secondary-500 focus:ring-secondary-400 hover:bg-secondary-200 dark:hover:bg-secondary-800 dark:hover:text-secondary-300",
      gray: "text-gray-500 focus:ring-gray-400 hover:bg-gray-200 dark:hover:bg-gray-800 dark:hover:text-gray-300",
      none: "",
    },
    size: {
      xs: "m-0.5 rounded-xs focus:ring-1 p-0.5",
      sm: "m-0.5 rounded-sm focus:ring-1 p-0.5",
      md: "m-0.5 rounded-lg focus:ring-2 p-1.5",
      lg: "m-0.5 rounded-lg focus:ring-2 p-2.5",
    },
  },
  defaultVariants: {
    color: "gray",
    size: "md",
    href: null,
  },
  slots: {
    svg: "",
  },
  compoundVariants: [
    {
      size: "xs",
      class: {
        svg: "w-3 h-3",
      },
    },
    {
      size: "sm",
      class: {
        svg: "w-3.5 h-3.5",
      },
    },
    {
      size: ["md", "lg"],
      class: {
        svg: "w-5 h-5",
      },
    },
    {
      size: ["xs", "sm", "md", "lg"],
      color: "none",
      class: "focus:ring-0 rounded-none m-0",
    },
  ],
});
