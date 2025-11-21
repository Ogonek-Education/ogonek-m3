import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export const button = tv({
  slots: {
    base: "relative group inline-flex select-none items-center justify-center rounded-full min-h-[48px] min-w-[48px] padding-default overflow-hidden transition-colors",
    state:
      "transition-opacity duration-200 absolute inset-0 pointer-events-none group-hover:opacity-8 group-active:opacity-18",
    icon: "size-24 z-0 -right-10 -bottom-10 text-bg-tertiary absolute",
  },
  variants: {
    color: {
      primary: {
        base: "bg-md-sys-color-primary-container text-md-sys-color-on-primary-container",
        state: "bg-md-sys-color-on-primary-container opacity-0",
      },
      secondary:
        "text-text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
      tertiary: "",
      error: "",
      // obsolete
      prominent:
        "bg-clickable border-primary-accent bg-accent/6 hover:bg-accent/12",
      alternative: "",
      gray: "text-text-white bg-stone-700 hover:bg-stone-800 dark:bg-stone-600 dark:hover:bg-stone-700 focus-within:ring-stone-300 dark:focus-within:ring-stone-800",
      red: "border-danger bg-red/6 hover:bg-red/12",
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
