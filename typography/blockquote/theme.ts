import { tv, type VariantProps } from "tailwind-variants";

export type BlockquoteVariants = VariantProps<typeof blockquote>;

export const blockquote = tv({
  base: "font-semibold text-stone-900 dark:text-text-white",
  variants: {
    border: {
      true: "border-s-4 border-stone-300 dark:border-stone-500",
      false: "",
    },
    bg: {
      true: "bg-stone-50 dark:bg-stone-800",
      false: "",
    },
  },
});
