import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { BodyVariants } from "./theme";

export interface BodyProps
  extends BodyVariants, HTMLAttributes<HTMLParagraphElement> {
  children: Snippet;
}
