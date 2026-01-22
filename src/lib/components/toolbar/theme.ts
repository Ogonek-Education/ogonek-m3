import { tv, type VariantProps } from "tailwind-variants";

export type ToolbarVariants = VariantProps<typeof toolbar>;
export type ToolbarItemVariants = VariantProps<typeof toolbaritem>;

export const toolbar = tv({
  slots: {
    base: "flex gap-2 px-2 bottom-2 fixed md:hidden items-center justify-center w-full h-16 left-0 z-20",
    items:
      "shadow-elevation-2 bg-md-sys-color-surface-container flex gap-1 p-0.5 box-border rounded-full",
  },
});

/// not used
export const toolbaritem = tv({
  slots: {
    base: "flex state-layer relative ",
    icon: "",
    label: "",
  },
  variants: {
    selected: {
      true: "bg-md-sys-color-secondary-container text-mg-sys-color-on-secondary-container hover:before:bg-md-sys-color-on-secondary-container/8",
      false:
        "bg-md-sys-color-surface-container text-md-sys-color-surface-container hover:before:bg-md-sys-color-on-surface-variant/8",
    },
  },
});
