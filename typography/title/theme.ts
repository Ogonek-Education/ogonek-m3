import { tv, type VariantProps } from "tailwind-variants";

export type TitleVariants = VariantProps<typeof title>;

export const title = tv({
  base: "font-serif text-balance font-medium text-[14pt] tracking-[0.1pt] leading-[20pt] md:text-[16pt] md:tracking-[0.15pt] md:leading-[24pt] lg:text-[22pt] lg:tracking-normal lg:leading-[28pt]",
});
