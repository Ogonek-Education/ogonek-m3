import type { DivAttrs } from "$lib/components";
import type { Snippet } from "svelte";
import type { TooltipVariants } from "./theme";

export type TooltipProps = TooltipVariants &
  DivAttrs & {
    subhead?: string;
    children?: Snippet;
    supportingText?: string;
    trigger?: Snippet;
    placement?: "top" | "bottom";
    offset?: number;
    openDelay?: number;
    closeDelay?: number;
  };
