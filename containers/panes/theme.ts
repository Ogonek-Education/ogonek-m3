import { tv, type VariantProps } from "tailwind-variants";

export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;
export type SupportingPaneVariants = VariantProps<typeof supportingPane>;

export const splitPane = tv({
  slots: {
    left: "md:fixed top-0 bottom-0 overflow-auto bg-md-sys-color-surface-container py-4 scrollbar-none",
    right: "flex flex-col box-border md:min-h-[calc(100dvh-30px)]",
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
    base: "min-h-[calc(100dvh-50px)] md:min-h-[calc(100dvh-100px)] bg-md-sys-color-surface-container flex flex-col box-border overflow-clip",
    content: "flex flex-1 flex-col gap-3 w-full md:pb-12",
    headline: "md-sys-typescale-title-medium font-serif mb-4",
  },
  variants: {
    background: {
      transparent: "",
      filled: {
        base: "bg-md-sys-color-surface md:rounded-lg",
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
    padding: {
      none: "",
      md: "p-4 md:p-6 md:py-2",
    },
    // not used
    full: {
      true: "min-h-[calc(100dvh-30px)]",
      false: "",
    },
  },
});

export const supportingPane = tv({
  slots: {
    base: "flex w-full flex-col gap-4 md:flex-row min-h-[calc(100dvh-30px)] py-3 md:p-0",
    main: "bg-md-sys-color-surface box-border rounded-lg md:p-6 p-0 grow order-2 md:order-1",
    supporting:
      "bg-md-sys-color-secondary-container text-md-sys-color-on-secondary-container box-border rounded-lg md:rounded-l-lg p-4 md:w-80 md:sticky md:top-4 md:h-[calc(100dvh-2rem)] md:overflow-auto order-1 md:order-2",
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
