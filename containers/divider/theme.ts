import { tv, type VariantProps } from "tailwind-variants";

export type HrVariants = VariantProps<typeof hr>;

export const hr = tv({
  base: "h-[1px] mt-1 mb-2 mr-2 bg-sys-color-outline-variant transition-colors ml-4",
});
