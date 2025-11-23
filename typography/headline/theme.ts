import { tv, type VariantProps } from "tailwind-variants";

export type headlineVariants = VariantProps<typeof headline>;

export const headline = tv({
  base: "font-serif text-balance leading-[32pt] text-[24pt] md:text-[28pt] md:leading-[36pt] lg:text-[32pt] lg:leading-[40pt]",
});
