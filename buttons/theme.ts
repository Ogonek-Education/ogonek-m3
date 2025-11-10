import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export const button = tv({
  slots: {
    base: "w-full font-medium flex b transition-all",
    outline: "bg-transparent border-primary",
  },
  variants: {
    color: {
      primary: "bg-clickable border-primary",
      prominent: "bg-prominent text-secondary border-primary-accent",
      secondary:
        "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
      alternative: "",
      gray: "text-white bg-stone-700 hover:bg-stone-800 dark:bg-stone-600 dark:hover:bg-stone-700 focus-within:ring-stone-300 dark:focus-within:ring-stone-800",
      red: "border-danger bg-danger",
    },
    size: {
      sm: "padding-narrow text-sm active:scale-95",
      md: "padding-default text-sm active:scale-[97%]",
      lg: "padding-wider text-base active:scale-[99%]",
    },
    position: {
      center: "text-center items-center justify-center",
      end: "text-left items-end h-full justify-start",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    checked: {
      true: "",
      false: "",
    },
    scale: {
      sm: "active:scale-[99%]",
      md: "active:scale-[97%]",
      lg: "active:scale-95",
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
