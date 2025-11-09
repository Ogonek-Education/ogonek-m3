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
      primary: "focus-within:ring-stone-400 dark:focus-within:ring-stone-600",
      secondary:
        "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
      alternative: "",
      gray: "text-white bg-stone-700 hover:bg-stone-800 dark:bg-stone-600 dark:hover:bg-stone-700 focus-within:ring-stone-300 dark:focus-within:ring-stone-800",
      red: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
    },
    size: {
      sm: "padding-narrow text-sm",
      md: "padding-default text-sm",
      lg: "padding-wider text-base",
    },
    position: {
      center: "text-center items-center justify-center",
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
