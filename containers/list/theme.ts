import { tv } from "tailwind-variants";

export const listiem = tv({
  slots: {
    base: "bg-md-sys-color-surface text-sys-color-on-surface-variant state-layer disabled:before:bg-md-sys-color-on-surface/10 hover:before:bg-md-sys-color-on-surface/8 focus:before:bg-md-sys-color-on-surface/10 md-sys-state-focus-indicator px-4 py-2 gap-4 items-center justify-between relative flex rounded-lg before:rounded-lg  ",
    leading: "size-6 inline-flex items-start",
    body: "",
    overline: "md-sys-typescale-label-small",
    headline: "text-md-sys-color-on-surface md-sys-typescale-body-large",
    supporting: "md-sys-typescale-label-small",
    trailing: "size-6 inline-flex items-start",
  },
  variants: {
    lines: {
      1: "h-14",
      2: "h-18",
      3: "h-22",
    },
    selected: {
      true: {
        base: "text-md-sys-color-on-surface",
        headline: "text-md-sys-color-on-secondary-container",
        trailing: "text-md-sys-color-primary",
      },
      false: "",
    },
  },
});
