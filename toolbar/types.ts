import type { DivAttrs } from "$lib/components";
import type { Snippet } from "svelte";
import type { ToolbarVariants } from "./theme";

export type ToolbarProps = ToolbarVariants &
  DivAttrs & {
    children: Snippet;
  };
