import { tv, type VariantProps } from "tailwind-variants";

export type BodyVariants = VariantProps<typeof body>;

export const body = tv({
  base: "text-balance md-typescale-body-small md:md-typescale-body-medium lg:md-typescale-body-large",
});
