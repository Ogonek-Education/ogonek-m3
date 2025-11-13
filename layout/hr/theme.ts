import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type HrVariants = VariantProps<typeof hr> & Classes<typeof hr>;

export const hr = tv({
  slots: {
    base: "h-[2px] my-2 border-0 bg-border-primary group-hover:bg-border-hover transition-colors",
    div: "inline-flex items-center justify-center w-full",
    content:
      "absolute px-4 -translate-x-1/2 rtl:translate-x-1/2 bg-white start-1/2 dark:bg-primary",
    bg: "",
  },
  variants: {
    withChildren: {
      true: {
        base: "w-full",
        div: "relative",
      },
    },
  },
  defaultVariants: {
    withChildren: false,
  },
});
