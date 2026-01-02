import { tv, type VariantProps } from "tailwind-variants";

export type SplitPaneVariants = VariantProps<typeof splitPane>;
export type SinglePaneVariants = VariantProps<typeof singlePane>;
export type SupportingPaneVariants = VariantProps<typeof supportingPane>;

export const splitPane = tv({
  slots: {
    left: "md:fixed top-0 bottom-0 overflow-auto bg-md-sys-color-surface-container py-4 scrollbar-none hidden md:block",
    right:
      "flex flex-col box-border ml-0 md:ml-[var(--splitpane-left-width)] md:min-h-[calc(100dvh-30px)]",
    handle:
      "group hidden md:block fixed top-0 bottom-0 z-40 w-3 -ml-1 cursor-col-resize touch-none bg-transparent transition-colors duration-150 hover:bg-md-sys-color-outline/20 translate-x-1.5",
    handleGrip:
      "absolute left-1/2 top-1/2 flex h-16 w-1.5 -translate-x-1/2 -translate-y-1/2 flex-col items-center justify-center gap-1 rounded-full bg-md-sys-color-primary transition-[width,background-color] duration-200 ease-[var(--md-sys-motion-easing)] group-hover:w-0.5",
    handlePip: "h-0.5 w-0.5 rounded-full bg-md-sys-color-on-primary/80",
    base: "md:pl-4",
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
    base: " bg-md-sys-color-surface-container flex flex-col box-border overflow-clip",
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
      md: {
        base: "p-4 md:p-6 pb-24",
        content: "md:py-2",
      },
    },
    full: {
      true: "min-h-[calc(100dvh-30px)] ",
      false: "min-h-[calc(100dvh-50px)] md:min-h-[calc(100dvh-100px)] ",
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
        supporting: "",
      },
      left: {
        base: "md:flex-row-reverse",
        supporting: "",
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
