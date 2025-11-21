import { tv, type VariantProps } from "tailwind-variants";

export type RailVariants = VariantProps<typeof rail>;
export type RailItemVariants = VariantProps<typeof railElement>;

export const rail = tv({
  slots: {
    base: "py-6 bg-md-sys-color-surface-container border-border-primary hover:border-border-hover fixed z-40 h-full w-full flex-col overflow-visible rounded-none transition-all md:relative md:flex",
    items: "flex flex-col overflow-visible gap-1",
  },
});

export const railElement = tv({
  slots: {
    base: "group gap-default relative z-30 flex w-24 items-center  justify-center",
    content:
      "flex min-w-0 flex-col items-center justify-between rounded-2xl gap-0.5 py-1.5",
    icon: "size-6",
    iconContainer: "py-1.5 px-4 rounded-2xl transition-colors",
    badge:
      "bg-red/12 text-red ring-red absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-2xl px-1.5 font-bold ring-2 md:relative md:top-0.5 md:right-0 md:ml-2 md:size-7",
  },
  variants: {
    active: {
      true: {
        iconContainer:
          "group-hover:text-md-sys-color-secondary   bg-md-sys-color-secondary-container",
        content: "text-md-sys-color-on-secondary-container",
      },
      false: {
        iconContainer: " group-hover:bg-md-sys-color-surface-variant",
        content: "group-hover:text-md-sys-color-on-surface-variant",
      },
    },
    collapsed: {
      true: "",
      false: "",
    },
  },
});
