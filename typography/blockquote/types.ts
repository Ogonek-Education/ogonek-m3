import type { Snippet } from "svelte";
import type { HTMLBlockquoteAttributes } from "svelte/elements";

// blockquote
export interface BlockquoteProps extends HTMLBlockquoteAttributes {
  children: Snippet;
  border?: boolean;
  bg?: boolean;
}
