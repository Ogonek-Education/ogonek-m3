import type { DivAttrs, IconProps } from "$lib/components";
import type { Snippet } from "svelte";
import type { ToolbarItemVariants, ToolbarVariants } from "./theme.js";

export type ToolbarProps = ToolbarVariants &
  DivAttrs & {
    children?: Snippet;
    fab?: Snippet;
  };

export type ToolbarItemProps = ToolbarItemVariants &
  DivAttrs & {
    icon: IconProps;
    label?: string;
  };
