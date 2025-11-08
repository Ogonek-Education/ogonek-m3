import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export const button = tv({
  slots: {
    base: "w-full bg-clickable font-medium flex border-fat",
    outline: "bg-transparent border-fat",
  },
  variants: {
    color: {
      primary:
        "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
      secondary:
        "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
      gray: "text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-800",
      red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
    },
    size: {
      sm: "padding-narrow text-sm",
      md: "padding-default text-sm",
      lg: "padding-wider text-base",
    },
    position: {
      center: "text-center items-center justify-center size-max",
      end: "text-left items-end h-full justify-start",
    },
    group: {
      true: "focus-within:ring-2 focus-within:z-10 [&:not(:first-child)]:rounded-s-none [&:not(:last-child)]:rounded-e-none [&:not(:last-child)]:border-e-0",
      false: "focus-within:ring-4 focus-within:outline-hidden",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    checked: {
      true: "",
      false: "",
    },
  },
});

export const buttonGroup = tv({
  base: "inline-flex rounded-lg shadow-xs",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});
