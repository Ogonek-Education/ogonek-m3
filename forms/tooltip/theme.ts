import { tv, type VariantProps } from "tailwind-variants";

export type TooltipVariants = VariantProps<typeof tooltip>;

export const tooltip = tv({
  slots: {
    base: "bg-md-sys-color-surface-container py-3 px-4 flex flex-col gap-3 shadow-elevation-2 rounded-md relative state-layer hover:before:bg-md-sys-color-primary/8 before:rounded-md",
    subhead: "",
    supportingText: "",
    textContainer: "text-md-sys-on-surface-variant space-y-2",
  },
});
