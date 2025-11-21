import { tv, type VariantProps } from "tailwind-variants";

export type RailVariants = VariantProps<typeof rail>;
export type RailItemVariants = VariantProps<typeof railElement>;

export const rail = tv({
  slots: {
    base: "py-12 bg-md-sys-color-surface-container h-full z-40 flex-col transition-all  flex gap-6",
    items: "space-y-1 pt-6",
  },
  variants: {
    expanded: {
      true: "pl-9  w-60 items-start",
      false: "w-24 items-center",
    },
  },
});

export const railElement = tv({
  slots: {
    base: "group relative z-30 transition-all flex items-center",
    content:
      "flex min-w-0 items-center rounded-full gap-0.5 py-1.5 transition-all",
    icon: "size-6",
    iconContainer: "rounded-full transition-colors",
    badge:
      "bg-red/12 text-red ring-red absolute -top-1 -right-1 flex h-5 min-w-5 items-center justify-center rounded-2xl px-1.5 font-bold ring-2 md:relative md:top-0.5 md:right-0 md:ml-2 md:size-7",
    label: "tracking-wide",
  },
  variants: {
    active: {
      true: {
        content: "text-md-sys-color-on-secondary-container",
        iconContainer:
          "group-hover:text-md-sys-color-secondary  bg-md-sys-color-secondary-container",
      },
      false: {
        content: "text-md-sys-color-on-surface-variant",
        iconContainer: "",
      },
    },
    expanded: {
      true: {
        base: "justify-start",
        content: "items-center p-4 gap-3",
        iconContainer: "",
        label: "text-sm",
      },
      false: {
        iconContainer: "py-1.5 px-4",
        base: "justify-center",
        content: "items-center flex-col",
        label: "text-xs ",
      },
    },
  },
  compoundVariants: [
    {
      expanded: true,
      active: true,
      class: {
        iconContainer: "bg-transparent",
        content: "bg-md-sys-color-secondary-container",
      },
    },
    {
      expanded: true,
      active: false,
      class: {
        content: "group-hover:bg-md-sys-color-surface-variant",
      },
    },
    {
      expanded: false,
      active: false,
      class: {
        iconContainer: "group-hover:bg-md-sys-color-surface-variant",
      },
    },
  ],
});
