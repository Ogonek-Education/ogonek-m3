import type { DivAttrs } from "$lib";
import type { Snippet } from "svelte";
import type { SplitPaneVariants } from "./theme";

export type SplitPaneProps = SplitPaneVariants &
  DivAttrs & {
    left: Snippet;
    right: Snippet;
  };
