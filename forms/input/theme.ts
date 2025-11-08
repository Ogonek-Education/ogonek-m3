import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type InputVariants = VariantProps<typeof input> & Classes<typeof input>;

export const input = tv({
  slots: {
    base: "relative",
    input:
      "block w-full disabled:cursor-not-allowed disabled:opacity-50 rtl:text-right focus:outline-hidden",
    close:
      "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
  },
  variants: {
    color: {
      default: {
        input:
          "focus:border-accent-light focus:ring-accent-light w-full placeholder-stone-600 transition-all duration-150 ease-out focus:ring-2 focus:outline-none disabled:cursor-not-allowed disabled:opacity-60 bg-stone-100/20 hover:bg-stone-100/80 active:bg-stone-100 dark:bg-stone-900/30 dark:hover:bg-stone-900 active:dark:bg-stone-800 transition-colors duration-150 rounded-2xl border-2 border-stone-300 hover:border-stone-400 focus:border-transparent dark:border-stone-800 dark:hover:border-stone-700",
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
    size: {
      sm: { input: "padding-narrow text-sm" },
      md: { input: "padding-default" },
      lg: { input: "padding-default text-xl md:text-2xl" },
    },
  },
});
