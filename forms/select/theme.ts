import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";
import { input } from "../input";

export type SelectVariants = VariantProps<typeof select> &
  Classes<typeof select>;
export type MultiSelectVariants = VariantProps<typeof multiSelect> &
  Classes<typeof multiSelect>;

export const select = tv({
  slots: {
    base: "input-default",
  },
  variants: {
    disabled: {
      true: "cursor-not-allowed opacity-50",
      false: "",
    },
    size: {
      sm: "padding-narrow",
      md: "padding-default",
      lg: "padding-default text-xl md:text-2xl",
    },
    color: {
      default: input["variants"]["color"]["default"]["input"],
    },
  },
});

export const multiSelect = tv({
  slots: {
    base: "relative border border-stone-300 w-full flex items-center gap-2 dark:border-stone-600 ring-primary-500 dark:ring-primary-500 focus-visible:outline-hidden",
    select: "",
    dropdown:
      "absolute z-50 p-3 flex flex-col gap-1 max-h-64 bg-white border border-stone-300 dark:bg-stone-700 dark:border-stone-600 start-0 top-[calc(100%+1rem)] rounded-2xl cursor-pointer overflow-y-scroll w-full",
    item: "py-2 px-3 rounded-2xl text-stone-600 hover:text-stone-600 dark:text-stone-400 hover:bg-stone-100 dark:hover:text-stone-300 dark:hover:bg-stone-600",
    close: "p-0 focus:ring-stone-400 dark:text-white",
    span: "",
    placeholder: "text-text-tertiary",
    svg: "ms-1 h-3 w-3 cursor-pointer text-stone-800 dark:text-white",
  },
  variants: {
    size: {
      sm: "px-2.5 py-2.5 min-h-[2.4rem] text-xs",
      md: "px-2.5 py-2.5 min-h-[2.7rem] text-sm",
      lg: "px-3 py-3 min-h-[3.2rem] sm:text-base",
    },
    disabled: {
      true: {
        base: "cursor-not-allowed opacity-50 pointer-events-none",
        item: "cursor-not-allowed opacity-50",
        close: "cursor-not-allowed",
      },
      false: {
        base: "focus-within:border-primary-500 dark:focus-within:border-primary-500 focus-within:ring-1",
      },
    },
    active: {
      true: {
        item: "bg-primary-100 text-primary-500 dark:bg-primary-500 dark:text-primary-100 hover:bg-primary-100 dark:hover:bg-primary-500 hover:text-primary-600 dark:hover:text-primary-100",
      },
    },
    selected: {
      true: {
        item: "bg-stone-100 text-black font-semibold hover:text-black dark:text-white dark:bg-stone-600 dark:hover:text-white",
      },
    },
    grouped: {
      false: { base: "rounded-2xl", select: "rounded-2xl" },
      true: {
        base: "first:rounded-s-2xl last:rounded-e-2xl not-first:-ms-px group",
        select:
          "group-first:rounded-s-2xl group-last:rounded-e-2xl group-not-first:-ms-px h-full",
      },
    },
  },
  // Add compoundVariants here
  compoundVariants: [
    {
      selected: true,
      active: true,
      class: {
        item: "bg-primary-200 dark:bg-primary-600 text-primary-700 dark:text-primary-100 font-semibold", // Adjust colors as needed
      },
    },
  ],
  defaultVariants: {
    underline: false,
    size: "md",
  },
});
