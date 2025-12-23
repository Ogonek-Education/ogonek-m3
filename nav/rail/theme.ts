import { tv, type VariantProps } from "tailwind-variants";

export type RailVariants = VariantProps<typeof rail>;
export type RailItemVariants = VariantProps<typeof railElement>;

export const rail = tv({
  slots: {
    base: "py-12 hidden fixed bg-md-sys-color-surface-container h-full z-20 flex-col transition-all md:flex gap-6",
    items: "space-y-3 pt-6 scrollbar-none",
    ghost: "w-24",
    scrim: "fixed xl:hidden inset-0 -z-10",
  },
  variants: {
    expanded: {
      true: {
        base: "pl-9 w-60 items-start bg-md-sys-color-surface-container-highest xl:bg-md-sys-color-surface-container rounded-r-lg",
        scrim: "z-20 bg-black/40 transition-colors",
      },
      false: {
        base: "w-24 items-center",
      },
    },
  },
});

export const railElement = tv({
  slots: {
    base: "group relative z-30 transition-all flex items-center",
    content:
      "flex min-w-0 items-center rounded-full gap-0.5 py-1.5 transition-all",
    icon: "size-6",
    iconContainer: "relative rounded-full transition-colors",
    label: "",
  },
  variants: {
    active: {
      true: {
        content: "text-md-sys-color-on-secondary-container",
        label: "font-semibold ",
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
        label: "md-sys-typescale-label-large",
      },
      false: {
        iconContainer: "py-1.5 px-4",
        base: "justify-center",
        content: "items-center flex-col",
        label: "md-sys-typescale-label-medium",
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
