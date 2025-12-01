import { tv, type VariantProps } from "tailwind-variants";

export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;

export const splitPane = tv({
  slots: {
    left: "fixed top-0 bottom-0 left-24 overflow-y-auto bg-md-sys-color-surface-container overflow-x-visible py-4",
    right:
      "bg-md-sys-color-surface box-border min-h-[calc(100dvh-30px)] rounded-lg p-4",
    drag: "fixed top-0 bottom-0 cursor-col-resize transition-colors bg-md-sys-color-primary",
    base: "pl-3",
  },
});

export const singlePane = tv({
  slots: {
    base: "min-h-[calc(100dvh-30px)]  bg-md-sys-color-surface-container p-4 flex flex-col box-border ",
    content: "flex flex-1 flex-col",
    headline: "md-sys-typescale-display-large font-serif mb-4",
  },
  variants: {
    background: {
      transparent: "",
      filled: {
        base: "bg-md-sys-color-surface rounded-lg",
      },
    },
    centered: {
      true: {
        content: "max-w-5xl",
        base: "items-center",
      },
      false: "",
    },
  },
});
