import { tv } from "tailwind-variants";

export const card = tv({
  slots: {
    base: "relative flex flex-col rounded-lg disabled:opacity-[0.38] disabled:bg-sys-color-surface-variant state-layer before:rounded-lg focus:outline-3 focus:outline-md-sys-color-secondary hover:before:bg-md-sys-color-on-surface/8 p-4 transition-all",
    icon: "size-6 text-md-sys-color-primary",
  },
  variants: {
    type: {
      elevated:
        "shadow-elevation-1 hover:shadow-elevation-2 bg-md-sys-color-surface-container-low",
      filled:
        "bg-md-sys-color-surface-container-highest  hover:shadow-elevation-1",
      outlined:
        "hover:shadow-elevation-1 bg-md-sys-color-surface outline-1 outline-md-sys-color-outline-variant",
    },
  },
});
