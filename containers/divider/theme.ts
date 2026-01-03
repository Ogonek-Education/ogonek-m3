import { tv, type VariantProps } from "tailwind-variants";

export type HrVariants = VariantProps<typeof hr>;

export const hr = tv({
  base: "bg-md-sys-color-outline-variant transition-colors",
  variants: {
    orientation: {
      horizontal: "h-[1px] mt-1 mb-2 w-full",
      vertical: "w-[1px] h-full",
    },
    variant: {
      inset: "mr-2 ml-4",
      full: "",
    },
  },
});
