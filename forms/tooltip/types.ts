import type { DivAttrs } from "$lib/components";
import type { Snippet } from "svelte";
import type { TooltipVariants } from "./theme";

export type TooltipProps = TooltipVariants &
  DivAttrs & {
    subhead?: string | null;
    children?: Snippet;
    supportingText?: string | null;
    text?: string | null;
    trigger?: Snippet;
    triggerClass?: string;
    placement?: "top" | "bottom";
    offset?: number;
    openDelay?: number;
    closeDelay?: number;
    variant?: "rich" | "snack";
  };
