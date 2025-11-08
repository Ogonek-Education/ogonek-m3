import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { DescriptionListVariants } from "./theme";

export interface DescriptionListProps extends HTMLAttributes<HTMLElement> {
  children: Snippet;
  tag: DescriptionListVariants["tag"];
}
