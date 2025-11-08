import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface SecondaryProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
}
