import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type PageLayoutVariants = VariantProps<typeof pageLayout> &
  Classes<typeof pageLayout>;
export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;

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
    right: "min-h-[97dvh] flex flex-col bg-md-sys-color-surface rounded-lg p-6",
    drag: "fixed top-0 bottom-0 cursor-col-resize transition-colors bg-md-sys-color-primary",
    base: "px-3",
  },
});

export const singlePane = tv({
  slots: {
    base: "flex flex-col items-center justify-center min-h-[97dvh] bg-md-sys-color-surface-container p-4",
    content: "max-w-5xl w-full",
    headline: "md-sys-typescale-display-large font-serif mb-4",
  },
  variants: {
    background: {
      transparent: "",
      filled: {
        base: "bg-md-sys-color-surface rounded-lg",
      },
    },
  },
});
