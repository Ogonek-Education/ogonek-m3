import { tv, type VariantProps } from "tailwind-variants";

export type AnchorVariants = VariantProps<typeof anchor>;

export const anchor = tv({
  base: "inline-flex items-center",
  variants: {
    color: {
      primary: "text-link-default",
      secondary: "text-secondary-600 dark:text-secondary-500",
      gray: "text-gray-600 dark:text-gray-500",
    },
  },
});
