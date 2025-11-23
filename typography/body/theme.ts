import { tv, type VariantProps } from "tailwind-variants";

export type BodyVariants = VariantProps<typeof body>;

export const body = tv({
  base: "text-balance text-[12pt] tracking-[0.4pt] leading-[16pt] md:text-[14pt] md:tracking-[0.25pt] md:leading-[20pt] lg:text-[16pt] lg:tracking-[0.5pt] lg:leading-[24pt]",
});
