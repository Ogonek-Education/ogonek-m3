import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { ParagraphVariants } from "./theme";

export interface ParagraphProps
  extends ParagraphVariants,
    HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
  italic?: boolean;
  firstUpper?: boolean;
  justify?: boolean;
}
