import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type HrVariants = VariantProps<typeof hr> & Classes<typeof hr>;

export const hr = tv({
  slots: {
    base: "h-[1px] mt-1 mb-2 mr-2 bg-sys-color-outline-variant transition-colors ml-4",
    div: "inline-flex items-center justify-center w-full",
    content:
      "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-primary",
    bg: "",
  },
});
