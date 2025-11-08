import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../theme/theme";

export type InputVariants = VariantProps<typeof input> & Classes<typeof input>;

export const input = tv({
  slots: {
    base: "relative w-full",
    input:
      "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden",
    close:
      "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
  },
  variants: {
    size: {
      sm: { input: "text-xs px-2 py-1" },
      md: { input: "text-sm px-2.5 py-2.5" },
      lg: { input: "sm:text-base px-3 py-3" },
    },
    color: {
      default: {
        input:
          "border border-gray-300 dark:border-gray-600 focus:border-primary-500 focus:ring-primary-500 dark:focus:border-primary-500 dark:focus:ring-primary-500 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400 bg-gray-50 text-gray-900 dark:bg-gray-700 dark:text-white dark:placeholder-gray-400",
      },
      tinted: {
        input:
          "border border-gray-300 dark:border-gray-500 bg-gray-50 text-gray-900 dark:bg-gray-600 dark:text-white dark:placeholder-gray-400",
      },
      primary: {
        input:
          "border border-primary-200 dark:border-primary-400 focus:ring-primary-500 focus:border-primary-600 dark:focus:ring-primary-500 dark:focus:border-primary-500 bg-primary-50 text-primary-900 placeholder-primary-700 dark:text-primary-400 dark:placeholder-primary-500 dark:bg-gray-700",
      },
      secondary: {
        input:
          "border border-secondary-200 dark:border-secondary-400 focus:ring-secondary-500 focus:border-secondary-600 dark:focus:ring-secondary-500 dark:focus:border-secondary-500 bg-secondary-50 text-secondary-900 placeholder-secondary-700 dark:text-secondary-400 dark:placeholder-secondary-500 dark:bg-gray-700",
      },
    },
  },
  defaultVariants: {
    size: "md",
    color: "default",
  },
});
