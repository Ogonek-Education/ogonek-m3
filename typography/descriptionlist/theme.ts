import { tv, type VariantProps } from "tailwind-variants";

export type DescriptionListVariants = VariantProps<typeof descriptionList>;

export const descriptionList = tv({
  variants: {
    tag: {
      dt: "text-stone-500 md:text-lg dark:text-stone-400",
      dd: "text-lg font-semibold",
    },
  },
  defaultVariants: {
    tag: "dt",
  },
});
