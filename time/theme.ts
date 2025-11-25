import { tv, type VariantProps } from "tailwind-variants";

export type TimepickerVariants = VariantProps<typeof timepicker>;

export const timepicker = tv({
  slots: {
    base: "bg-md-sys-color-surface-container-high shadow-elevation-3 rounded-xl group ",
    headline:
      "text-md-sys-color-on-surface-variant md-sys-typescale-label-medium",
    fieldSeparator:
      "text-md-sys-color-on-surface md-sys-typescale-display-large",
    timeInput:
      "bg-md-sys-color-surface-container-highest rounded-sm outline outline-md-sys-color-outline w-24 h-18 md-sys-typescale-display-medium text-md-sys-color-on-surface hover:text-sys-color-on-surface state-layer before:bg-md-sys-color-on-surface/8 md-sys-state-focus-indicator",
    timeInputSupportingText:
      "text-md-color-on-surface-variant md-sys-typescale-body-small",
  },
});
