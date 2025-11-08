import type { AnchorButtonAttributes } from "$lib/types";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type {
  ToolbarButtonVariants,
  ToolbarGroupVariants,
  ToolbarVariants,
} from "./theme";

// toolbar
export interface ToolbarProps
  extends ToolbarVariants,
    Omit<HTMLAttributes<HTMLDivElement>, "color"> {
  end?: Snippet;
}

export interface ToolbarGroupProps
  extends ToolbarGroupVariants,
    HTMLAttributes<HTMLDivElement> {}

export type ToolbarButtonProps = ToolbarButtonVariants &
  AnchorButtonAttributes & {
    name?: string;
  };
