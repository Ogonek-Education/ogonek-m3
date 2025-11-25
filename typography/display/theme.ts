import { tv, type VariantProps } from "tailwind-variants";

export type HeadingVariants = VariantProps<typeof display>;

export const display = tv({
  base: "font-serif lg:text-[57px] text-balance lg:tracking-[-0.25px] lg:leading-[64px] md:text-[45px] md:leading-[52px] tracking-normal text-[36px] leading-[44px]",
});
