import { tv, type VariantProps } from "tailwind-variants";

export type BodyVariants = VariantProps<typeof body>;

export const body = tv({
  base: "text-balance md-sys-typescale-body-small md:md-sys-typescale-body-medium lg:md-sys-typescale-body-large max-w-prose",
});
