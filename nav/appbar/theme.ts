import { tv, type VariantProps } from "tailwind-variants";

export type AppbarVariants = VariantProps<typeof appbar>;

export const appbar = tv({
  slots: {
    base: "fixed top-0 w-full md:hidden flex px-1 z-40 items-center justify-between",
    title: "text-md-sys-color-on-surface md-sys-typescale-title-large",
    subtitle:
      "text-md-sys-color-on-surface-variant md-sys-typescale-label-medium",
    leading: "text-md-sys-color-on-surface",
    trailing: "text-md-sys-color-on-surface-variant",
  },
  variants: {
    scrolled: {
      true: { base: "shadow-elevation-2 bg-md-sys-color-surface-container" },
      false: { base: "shadow-elevation-0 bg-md-sys-color-surface" },
    },
    searchContainer: {
      true: "",
      false: "",
    },
  },
});
