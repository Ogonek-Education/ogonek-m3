import { tv, type VariantProps } from "tailwind-variants";

export type TitleVariants = VariantProps<typeof title>;

export const title = tv({
  base: "font-serif text-balance font-medium text-[14px] tracking-[0.1px] leading-[20px] md:text-[16px] md:tracking-[0.15px] md:leading-[24px] lg:text-[22px] lg:tracking-normal lg:leading-[28px]",
});
