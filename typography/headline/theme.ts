import { tv, type VariantProps } from "tailwind-variants";

export type headlineVariants = VariantProps<typeof headline>;

export const headline = tv({
  base: "font-serif text-balance md-typescale-headline-small md:md-typescale-headline-medium lg:md-typescale-headline-large",
});
