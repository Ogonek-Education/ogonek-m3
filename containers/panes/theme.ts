import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type PageLayoutVariants = VariantProps<typeof pageLayout> &
  Classes<typeof pageLayout>;
export type SplitPaneVariants = VariantProps<typeof splitPane>;

export const pageLayout = tv({
  slots: {
    base: " min-h-dvh flex overflow-visible",
    content: "flex w-full flex-1 overflow-visible justify-between h-full",
  },
  variants: {
    position: {
      centre: {
        base: "items-center justify-center",
        content: "m-auto max-w-3xl justify-center items-center",
      },
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
  },
});

export const splitPane = tv({
  slots: {
    left: "fixed top-0 bottom-0 left-24 overflow-y-auto bg-md-sys-color-surface-container overflow-x-visible py-4",
    right: "min-h-screen p-4 bg-md-sys-color-surface rounded-lg",
    drag: "fixed top-0 bottom-0 cursor-col-resize transition-colors bg-md-sys-color-primary",
    base: "",
  },
});
