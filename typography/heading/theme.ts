import { tv, type VariantProps } from "tailwind-variants";

export type HeadingVariants = VariantProps<typeof heading>;

export const heading = tv({
  base: "text-primary z-10 dark:text-dark-primary text-balance text-left text-truncate",
  variants: {
    tag: {
      hero: "text-4xl font-extrabold tracking-tighter md:text-5xl lg:text-6xl xl:text-8xl font-serif",
      h1: "text-2xl tracking-tighter md:text-3xl lg:text-4xl font-extrabold min-w-fit",
      h2: "text-xl md:text-2xl lg:text-3xl font-bold tracking-tight text-text-secondary",
      h3: "text-lg font-semibold md:text-xl xl:text-2xl tracking-tight text-text-secondary",
      h4: "text-base font-semibold md:text-lg lg:text-xl text-text-secondary",
      h5: "md:text-xl text-text-tertiary",
      h6: "md:text-lg text-text-tertiary",
    },
  },
  defaultVariants: {
    tag: "h1",
  },
});
