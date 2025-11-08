import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;

export const button = tv({
  slots: {
    base: "text-center font-medium inline-flex items-center justify-center",
    outline:
      "bg-transparent border hover:text-white dark:bg-transparent dark:hover-text-white",
    shadow: "shadow-lg",
  },
  variants: {
    color: {
      // "primary" | "dark" | "alternative" | "light" | "secondary" | "gray" | "red" | "orange" | "amber" | "yellow" | "lime" | "green" | "emerald" | "teal" | "cyan" | "sky" | "blue" | "indigo" | "violet" | "purple" | "fuchsia" | "pink" | "rose"
      primary: {
        base: "text-white bg-primary-700 hover:bg-primary-800 dark:bg-primary-600 dark:hover:bg-primary-700 focus-within:ring-primary-300 dark:focus-within:ring-primary-800",
        outline:
          "text-primary-700 border-primary-700 hover:bg-primary-800 dark:border-primary-500 dark:text-primary-500 dark:hover:bg-primary-600",
        shadow: "shadow-primary-500/50 dark:shadow-primary-800/80",
      },
      dark: {
        base: "text-white bg-gray-800 hover:bg-gray-900 dark:bg-gray-800 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-700",
        outline:
          "text-gray-900 border-gray-800 hover:bg-gray-900 dark:border-gray-600 dark:text-gray-400 dark:hover:bg-gray-600",
        shadow: "shadow-gray-500/50 gray:shadow-gray-800/80",
      },
      alternative: {
        base: "text-gray-900 bg-transparent border border-gray-200 dark:border-gray-600 hover:bg-gray-100 dark:bg-gray-800 dark:text-gray-400 hover:text-primary-700 focus-within:text-primary-700 dark:focus-within:text-white dark:hover:text-white dark:hover:bg-gray-700 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
        outline:
          "text-gray-700 border-gray-700 hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500",
        shadow: "_shadow-gray-500/50 dark:shadow-gray-800/80",
      },
      light: {
        base: "text-gray-900 bg-white border border-gray-300 hover:bg-gray-100 dark:bg-gray-800 dark:text-white dark:border-gray-600 dark:hover:bg-gray-700 dark:hover:border-gray-600 focus-within:ring-gray-200 dark:focus-within:ring-gray-700",
        outline:
          "text-gray-700 border-gray-700 hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80",
      },
      secondary: {
        base: "text-white bg-secondary-700 hover:bg-secondary-800 dark:bg-secondary-600 dark:hover:bg-secondary-700 focus-within:ring-secondary-300 dark:focus-within:ring-secondary-800",
        outline:
          "text-secondary-700 border-secondary-700 hover:bg-secondary-800 dark:border-secondary-400 dark:text-secondary-400 dark:hover:bg-secondary-500",
        shadow: "shadow-secondary-500/50 dark:shadow-secondary-800/80",
      },
      gray: {
        base: "text-white bg-gray-700 hover:bg-gray-800 dark:bg-gray-600 dark:hover:bg-gray-700 focus-within:ring-gray-300 dark:focus-within:ring-gray-800",
        outline:
          "text-gray-700 border-gray-700 hover:bg-gray-800 dark:border-gray-400 dark:text-gray-400 dark:hover:bg-gray-500",
        shadow: "shadow-gray-500/50 dark:shadow-gray-800/80",
      },
      red: {
        base: "text-white bg-red-700 hover:bg-red-800 dark:bg-red-600 dark:hover:bg-red-700 focus-within:ring-red-300 dark:focus-within:ring-red-900",
        outline:
          "text-red-700 border-red-700 hover:bg-red-800 dark:border-red-500 dark:text-red-500 dark:hover:bg-red-600",
        shadow: "shadow-red-500/50 dark:shadow-red-800/80",
      },
    },
    size: {
      xs: "px-3 py-2 text-xs",
      sm: "px-4 py-2 text-sm",
      md: "px-5 py-2.5 text-sm",
      lg: "px-5 py-3 text-base",
      xl: "px-6 py-3.5 text-base",
    },
    group: {
      true: "focus-within:ring-2 focus-within:z-10 [&:not(:first-child)]:rounded-s-none [&:not(:last-child)]:rounded-e-none [&:not(:last-child)]:border-e-0",
      false: "focus-within:ring-4 focus-within:outline-hidden",
    },
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    pill: {
      true: "rounded-full",
      false: "rounded-lg",
    },
    checked: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [],
  defaultVariants: {
    pill: false,
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
