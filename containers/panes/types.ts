import type { DivAttrs } from "$lib/components";
import type { Snippet } from "svelte";
import type {
  SinglePaneVariants,
  SplitPaneVariants,
  SupportingPaneVariants,
} from "./theme";

export type SplitPaneProps = SplitPaneVariants &
  DivAttrs & {
    left: Snippet;
    right: Snippet;
  };

export type SupportingPaneProps = SupportingPaneVariants &
  DivAttrs & {
    main: Snippet;
    supporting: Snippet;
    mainClass?: string;
    supportingClass?: string;
  };

export type SinglePaneProps = SinglePaneVariants &
  DivAttrs & {
    children: Snippet;
    headline?: string;
    class?: string;
    contentClass?: string;
  };
