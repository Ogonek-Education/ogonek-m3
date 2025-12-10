import type { DivAttrs } from "$lib/components";
import type { Snippet } from "svelte";
import type { SplitPaneVariants } from "./theme";

export type SplitPaneProps = SplitPaneVariants &
  DivAttrs & {
    left: Snippet;
    right: Snippet;
  };
