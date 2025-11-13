import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type SearchVariants = VariantProps<typeof search> &
  Classes<typeof search>;

export const search = tv({
  slots: {
    base: "relative w-full",
    left: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-stone-500 dark:text-stone-400",
    content:
      "absolute inset-y-0 end-0 flex items-center text-stone-500 dark:text-stone-400",
    input:
      "block w-full text-stone-900 border border-stone-300 rounded-lg bg-stone-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-stone-700 dark:border-stone-600 dark:placeholder-stone-400 dark:text-text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
    close:
      "absolute right-2 top-1/2 -translate-y-1/2 text-stone-400 hover:text-black",
    svg: "",
  },
});
