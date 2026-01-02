import { tv, type VariantProps } from "tailwind-variants";

export type TooltipVariants = VariantProps<typeof tooltip>;

export const tooltip = tv({
  slots: {
    base: "bg-md-sys-color-surface-container min-w-48 py-3 px-4 flex flex-col gap-3 shadow-elevation-2 rounded-md relative state-layer hover:before:bg-md-sys-color-primary/8 before:rounded-md",
    subhead: "",
    supportingText: "",
    textContainer: "text-md-sys-on-surface-variant space-y-2",
  },
  variants: {
    variant: {
      rich: {},
      snack: {
        base: "bg-md-sys-color-inverse-surface text-md-sys-color-inverse-on-surface md-sys-typescale-body-small px-3 py-2 shadow-elevation-3 before:rounded-md",
        supportingText:
          "text-md-sys-color-inverse-on-surface md-sys-typescale-body-small",
        textContainer: "",
      },
    },
  },
  defaultVariants: {
    variant: "rich",
  },
});
