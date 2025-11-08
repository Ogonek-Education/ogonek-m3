import type { HeadingVariants } from "$lib/components";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export interface HeadingProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag?: HeadingVariants["tag"];
}
