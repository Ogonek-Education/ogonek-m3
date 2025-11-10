import { tv, type VariantProps } from "tailwind-variants";

export type StackVariants = VariantProps<typeof stack>;

export const stack = tv({
  base: "flex relative",
  variants: {
    type: {
      vstack: "flex-row ",
      hstack: "flex-col ",
      zstack: "flex-col",
    },
    gap: {
      sm: "gap-narrow",
      md: "gap-default",
      lg: "gap-wider",
    },
    align: {
      left: "items-left",
      center: "items-center",
      right: "items-right",
      end: "items-end",
      start: "items-start",
    },
    justify: {
      start: "justify-start",
      center: "justify-center",
      end: "justify-end",
      between: "justify-between",
    },
    size: {
      full: "size-full",
      w: "w-full",
      h: "h-full",
    },
  },
});
