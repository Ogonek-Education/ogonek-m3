import { tv, type VariantProps } from "tailwind-variants";

export type StackVariants = VariantProps<typeof stack>;

export const stack = tv({
  base: "flex relative",
  variants: {
    type: {
      vstack: "flex-row",
      hstack: "flex-col",
      vFlip: "md:flex-row flex-col",
      hFlip: "md: flex-col flex-row",
      zstaack: "flex",
    },
    gap: {
      sm: "gap-narrow",
      md: "gap-default",
      lg: "gap-wider",
      none: "gap-0",
    },
    align: {
      left: "items-left",
      center: "items-center",
      right: "items-right",
      end: "items-end",
      start: "items-start",
    },
    size: {
      full: "size-full",
      w: "w-full",
      h: "h-full",
    },
  },
});
