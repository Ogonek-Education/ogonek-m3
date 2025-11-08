import { tv, type VariantProps } from "tailwind-variants";

export type AnchorVariants = VariantProps<typeof anchor>;

export const anchor = tv({
  base: "inline-flex items-center hover:underline",
  variants: {
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: "text-primary-600 dark:text-primary-500",
      secondary: "text-secondary-600 dark:text-secondary-500",
      gray: "text-gray-600 dark:text-gray-500",
    },
  },
});
