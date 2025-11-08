import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type SearchVariants = VariantProps<typeof search> &
  Classes<typeof search>;

export const search = tv({
  slots: {
    base: "relative w-full",
    left: "absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none",
    icon: "text-gray-500 dark:text-gray-400",
    content:
      "absolute inset-y-0 end-0 flex items-center text-gray-500 dark:text-gray-400",
    input:
      "block w-full text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-primary-500 focus:border-primary-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-primary-500 dark:focus:border-primary-500 disabled:cursor-not-allowed disabled:opacity-50",
    close:
      "absolute right-2 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black",
    svg: "",
  },
});
