import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type TextareaVariants = VariantProps<typeof textarea> &
  Classes<typeof textarea>;

export const textarea = tv({
  slots: {
    div: "relative",
    base: "block w-full text-sm border-0 px-0 bg-inherit dark:bg-inherit focus:outline-hidden focus:ring-0 disabled:cursor-not-allowed disabled:opacity-50",
    wrapper:
      "text-sm rounded-lg bg-stone-50 dark:bg-stone-600 text-stone-900 dark:placeholder-stone-400 dark:text-white border border-stone-200 dark:border-stone-500 disabled:cursor-not-allowed disabled:opacity-50",
    inner: "py-2 px-4 bg-white dark:bg-stone-800",
    header: "py-2 px-3 border-stone-200 dark:border-stone-500",
    footer: "py-2 px-3 border-stone-200 dark:border-stone-500",
    addon: "absolute top-2 right-2 z-10",
    close:
      "absolute right-2 top-5 -translate-y-1/2 text-stone-400 hover:text-black",
    svg: "",
  },
  variants: {
    wrapped: {
      false: {
        wrapper:
          "p-2.5 text-sm focus:outline-hidden focus:ring-primary-500 border-stone-300 focus:border-primary-500 dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
      },
    },
    hasHeader: {
      true: {
        header: "border-b",
      },
      false: {
        inner: "rounded-t-lg",
      },
    },
    hasFooter: {
      true: {
        footer: "border-t",
      },
      false: {
        inner: "rounded-b-lg",
      },
    },
  },
});
