import { tv, type VariantProps } from "tailwind-variants";

export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;
export type SupportingPaneVariants = VariantProps<typeof supportingPane>;

export const splitPane = tv({
  slots: {
    left: "md:fixed top-0 bottom-0 overflow-y-auto bg-md-sys-color-surface-container overflow-x-visible py-4",
    right: "flex flex-col box-border min-h-[calc(100dvh-30px)]",
    base: "pl-4",
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
    base: "min-h-[calc(100dvh-30px)] bg-md-sys-color-surface-container p-6 flex flex-col box-border ",
    content: "flex flex-1 flex-col md:py-2 gap-3 w-full",
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

export const supportingPane = tv({
  slots: {
    base: "flex w-full flex-col gap-4 md:flex-row min-h-[calc(100dvh-30px)]",
    main: "bg-md-sys-color-surface box-border rounded-lg p-6 grow",
    supporting:
      "bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container box-border rounded-l-lg p-4 md:w-80 -mr-4",
  },
  variants: {
    position: {
      right: {
        base: "md:flex-row",
      },
      left: {
        base: "md:flex-row-reverse",
      },
    },
    centered: {
      true: {
        base: "max-w-6xl mx-auto",
      },
      false: {
        base: "justify-between",
      },
    },
  },
  defaultVariants: {
    position: "right",
    centered: true,
  },
});
