import { tv, type VariantProps } from "tailwind-variants";

export type BodyVariants = VariantProps<typeof body>;

export const body = tv({
  base: "text-balance ",
});
