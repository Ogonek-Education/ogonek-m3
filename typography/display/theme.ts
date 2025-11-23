import { tv, type VariantProps } from "tailwind-variants";

export type HeadingVariants = VariantProps<typeof display>;

export const display = tv({
  base: "font-serif lg:text-[57pt] text-balance lg:tracking-[-0.25pt] lg:leading-[64pt] md:text-[45pt] md:leading-[52pt] tracking-normal text-[36pt] leading-[44pt]",
});
