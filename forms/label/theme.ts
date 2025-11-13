import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type LabelVariants = VariantProps<typeof label>;

export const label = tv({
  base: "gap-default padding-default relative grid items-center justify-between px-0 tracking-tight md:grid-cols-2 md:px-2.5",
  variants: {
    color: {
      disabled: "text-stone-500 dark:text-stone-500",
      primary: "text-primary-700 dark:text-primary-500",
      secondary: "text-secondary-700 dark:text-secondary-500",
      green: "text-green-700 dark:text-green-500",
      red: "text-red-700 dark:text-red-500",
      blue: "text-blue-700 dark:text-blue-500",
      yellow: "text-yellow-700 dark:text-yellow-500",
      gray: "text-stone-700 dark:text-stone-200",
    },
  },
});
