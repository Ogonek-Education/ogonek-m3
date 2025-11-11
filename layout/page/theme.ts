import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type PageLayoutVariants = VariantProps<typeof pageLayout> &
  Classes<typeof pageLayout>;

export const pageLayout = tv({
  slots: {
    base: "min-h-dvh flex  overflow-visible",
    content:
      "border-primary rounded-none border-collapse border-x-0 border-t-0 flex w-full flex-1 overflow-visible",
    button:
      "bg-clickable border-primary flex min-h-dvh w-20 pt-3 md:pt-7 items-start justify-center rounded-none border-t-0 border-l-0",
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
