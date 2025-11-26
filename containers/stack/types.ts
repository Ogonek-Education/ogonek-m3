import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { StackVariants } from "./theme";

export type StackProps = StackVariants &
  HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
  };
