import { tv, type VariantProps } from "tailwind-variants";

export type ToolbarVariants = VariantProps<typeof toolbar>;

export const toolbar = tv({
  slots: {
    base: "",
  },
});
