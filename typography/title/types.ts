import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface TitleProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}
