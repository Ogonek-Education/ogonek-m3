import type { Snippet } from "svelte";
import type { SplitPaneVariants } from "./theme";

export type SplitPaneProps = SplitPaneVariants & {
  left: Snippet;
  right: Snippet;
};
