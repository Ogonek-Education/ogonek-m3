import { tv, type VariantProps } from "tailwind-variants";

export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;

export const splitPane = tv({
  slots: {
    left: "md:fixed top-0 bottom-0 overflow-y-auto bg-md-sys-color-surface-container overflow-x-visible py-4",
    right:
      "flex flex-col bg-md-sys-color-surface box-border min-h-[calc(100dvh-30px)] rounded-lg p-6",
    base: "",
  },
  variants: {
    centered: {
      true: {
        base: "max-w-5xl mx-auto",
      },
      false: {
        base: "",
      },
    },
  },
});

export const singlePane = tv({
  slots: {
    base: "min-h-[calc(100dvh-30px)] bg-md-sys-color-surface-container  p-4 flex flex-col box-border ",
    content: "flex flex-1 flex-col md:py-2 w-full",
    headline: "md-sys-typescale-title-medium font-serif mb-4",
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
        content: "max-w-5xl ",
        base: "items-center justify-center",
        headline: "self-center",
      },
      false: "",
    },
  },
});
