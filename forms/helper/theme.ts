import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type HelperVariants = VariantProps<typeof helper>;

export const helper = tv({
  base: "text-xs font-normal text-stone-500 dark:text-stone-300",
  variants: {
    color: {
      disabled: "text-stone-400 dark:text-stone-500",
      primary: "text-primary-500 dark:text-primary-400",
      secondary: "text-secondary-500 dark:text-secondary-400",
      green: "text-green",
      red: "text-danger",
    },
  },
});
