import { tv, type VariantProps } from "tailwind-variants";

export type HeadingVariants = VariantProps<typeof heading>;

export const heading = tv({
  base: "text-primary dark:text-dark-primary text-balance",
  variants: {
    tag: {
      hero: "text-4xl font-extrabold tracking-tightest md:text-5xl lg:text-6xl xl:text-7xl",
      h1: "text-3xl tracking-tighter md:text-5xl font-extrabold min-w-fit",
      h2: "text-3xl md:text-4xl font-bold tracking-tight",
      h3: "text-2xl font-semibold md:text-3xl tracking-tight",
      h4: "text-xl font-semibold md:text-2xl",
      h5: "text-xl",
      h6: "text-lg",
    },
  },
  defaultVariants: {
    tag: "h1",
  },
});
