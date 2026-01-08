import type { DivAttrs } from "$lib/components";
import type { Placement } from "@floating-ui/dom";
import type { Snippet } from "svelte";
import type { TooltipVariants } from "./theme";

export type TooltipProps = TooltipVariants &
  DivAttrs & {
    subhead?: string | null;
    tutorial?: boolean;
    children?: Snippet;
    supportingText?: string | null;
    text?: string | null;
    trigger?: Snippet;
    triggerClass?: string;
    placement?: Placement;
    offset?: number;
    openDelay?: number;
    closeDelay?: number;
    variant?: "rich" | "snack";
  };
