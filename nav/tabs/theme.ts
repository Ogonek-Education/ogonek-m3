import { tv, type VariantProps } from "tailwind-variants";

export type TabVariants = VariantProps<typeof tab>;
export const tabHolder = tv({
  slots: {
    base: "bg-md-sys-color-surface flex relative",
    bar: "bg-md-sys-color-primary absolute bottom-0 h-[3px] transition-all duration-200",
  },
});
export const tab = tv({
  slots: {
    base: "relative state-layer flex flex-col items-center w-full py-2",
    label: "",
    icon: "size-6",
  },
  variants: {
    type: {
      primary: {
        base: "bg-md-sys-color-surface h-16 md-sys-typescale-title-small",
      },
      secondary: "",
    },
    active: {
      true: {
        base: "text-md-sys-color-primary border-md-sys-color-primary hover:before:bg-md-sys-color-primary/8",
      },
      false: {
        base: "text-md-sys-color-on-surface-variant border-transparent hover:md-sys-color-on-surface hover:before:md-sys-color-on-surface/8",
        icon: "hover:md-sys-color-on-surface",
      },
    },
  },
});
