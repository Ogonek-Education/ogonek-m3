import { tv, type VariantProps } from "tailwind-variants";

export type HeadingVariants = VariantProps<typeof heading>;

export const heading = tv({
  base: "text-primary dark:text-dark-primary text-balance",
  variants: {
    tag: {
      hero: "text-5xl font-extrabold tracking-tightest md:text-6xl lg:text-7xl xl:text-8xl",
      h1: "text-3xl tracking-tighter md:text-5xl font-extrabold min-w-fit",
      h2: "text-3xl md:text-4xl font-bold tracking-tight text-text-secondary",
      h3: "text-2xl font-semibold md:text-3xl tracking-tight text-text-secondary",
      h4: "text-xl font-semibold md:text-2xl text-text-secondary",
      h5: "text-xl text-text-tertiary",
      h6: "text-lg text-text-tertiary",
    },
  },
  defaultVariants: {
    tag: "h1",
  },
});
