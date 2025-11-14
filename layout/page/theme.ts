import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type PageLayoutVariants = VariantProps<typeof pageLayout> &
  Classes<typeof pageLayout>;

export const pageLayout = tv({
  slots: {
    base: "border-collapse min-h-dvh border-border-primary border-2 border-x-0 flex overflow-visible",
    content: "flex w-full flex-1 overflow-visible justify-between gap-default",
    button:
      "bg-clickable border-primary hidden md:flex min-h-dvh w-20 pt-3 md:pt-7 items-start justify-center rounded-none border-t-0 border-l-0",
    icon: "size-12",
  },
  variants: {
    position: {
      centre: "items-center justify-center m-auto padding-default",
      left: "items-start justify-between h-full",
    },
    flexCol: {
      true: {
        content: "flex-col",
      },
      false: {
        content: "flex-row",
      },
    },
    padding: {
      none: "p-0",
      sm: {
        content: "padding-narrow",
      },
      md: {
        content: "padding-default",
      },
      lg: {
        content: "padding-wider",
      },
    },
  },
});
