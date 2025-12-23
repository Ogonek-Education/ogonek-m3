import { tv, type VariantProps } from "tailwind-variants";

export type HrVariants = VariantProps<typeof hr>;

export const hr = tv({
  base: "h-[1px] mt-1 mb-2  bg-md-sys-color-outline-variant transition-colors",
  variants: {
    variant: {
      inset: "mr-2 ml-4",
      full: "w-full",
    },
  },
});
