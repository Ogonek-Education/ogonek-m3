import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type PageLayoutVariants = VariantProps<typeof pageLayout> &
  Classes<typeof pageLayout>;
export const pageLayout = tv({
  slots: {
    base: "min-h-dvh flex w-full overflow-visible border-primary border-x-0 border-t-0 rounded-none border-collapse",
    content: "flex overflow-visible",
    button:
      "bg-clickable border-primary flex min-h-dvh w-20 items-start justify-center rounded-none border-t-0 border-l-0",
    icon: "size-12",
  },
  variants: {
    position: {
      centre: {
        base: "items-center justify-center",
        content: "m-auto gap-default",
      },
      left: {
        base: "items-start justify-between",
        content: "flex-1 h-full w-full",
      },
    },
    flexCol: {
      true: {
        base: "flex-col",
        content: "",
      },
      false: {
        base: "flex-row",
        content: "",
      },
    },
    padding: {
      none: {
        base: "p-0",
      },
      sm: {
        base: "padding-narrow",
      },
      md: {
        base: "padding-default",
      },
      lg: {
        base: "padding-wider",
      },
    },
  },
});
