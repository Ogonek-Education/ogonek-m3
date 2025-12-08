import { tv } from "tailwind-variants";

export const navbar = tv({
  slots: {
    base: "shadow-elevation-2 bg-md-sys-color-surface-container z-20 flex h-16 fixed bottom-0 w-full left-0 justify-around py-1.5",
    items: "",
  },
});

// not used
export const navitem = tv({
  slots: {
    base: "justify-center flex flex-col gap-1",
    content: "items-center flex",
    icon: "size-6",
    iconContainer: "relative rounded-full py-1.5 px-4",
    label: "md-sys-typescale-label-medium",
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
  },
});
