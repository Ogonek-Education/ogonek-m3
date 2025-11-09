import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type PageLayoutVariants = VariantProps<typeof pageLayout> &
  Classes<typeof pageLayout>;

export const pageLayout = tv({
  slots: {
    base: "min-h-dvh flex gap-default overflow-visible",
    content: "border-fat-b flex w-full flex-1 overflow-visible",
    button:
      "bg-clickable border-fat-b flex min-h-dvh w-20 items-start justify-center border-r-2 border-stone-300 md:flex dark:border-stone-800",
    icon: "size-12",
  },
  variants: {
    position: {
      centre: "items-center justify-center m-auto padding-default",
      left: "items-start justify-between",
    },
    flexCol: {
      true: "flex-col",
      false: "flex-row",
    },
    padding: {
      none: "p-0",
      sm: "padding-narrow",
      md: "padding-default",
      lg: "padding-wider",
    },
  },
});
