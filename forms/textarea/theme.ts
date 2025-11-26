import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type TextareaVariants = VariantProps<typeof textarea> &
  Classes<typeof textarea>;

export const textarea = tv({
  slots: {
    div: "relative",
    base: "padding-default",
    close:
      "absolute right-2 top-5 -translate-y-1/2 text-stone-400 hover:text-black",
  },
});
