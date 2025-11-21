import { tv, type VariantProps } from "tailwind-variants";

export type HeadingVariants = VariantProps<typeof display>;

export const display = tv({
  base: "text-primary z-10 dark:text-dark-primary text-balance text-left text-truncate",
});
