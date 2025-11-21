import { tv, type VariantProps } from "tailwind-variants";

export type TitleVariants = VariantProps<typeof title>;

export const title = tv({
  base: "text-primary z-10 dark:text-dark-primary text-balance text-left text-truncate",
});
