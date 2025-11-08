import { tv, type VariantProps } from "tailwind-variants";

export type BlockquoteVariants = VariantProps<typeof blockquote>;

export const blockquote = tv({
  base: "font-semibold text-gray-900 dark:text-white",
  variants: {
    border: {
      true: "border-s-4 border-gray-300 dark:border-gray-500",
      false: "",
    },
    bg: {
      true: "bg-gray-50 dark:bg-gray-800",
      false: "",
    },
  },
});
