import type { IconProps } from "$lib/components";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { RailItemVariants, RailVariants } from "./theme";

export interface RailItemProps
  extends RailItemVariants, HTMLAttributes<HTMLAnchorElement> {
  iconProps: IconProps;
  badge?: number;
  external?: boolean;
  href: string;
  selected?: boolean;
  name: string;

  disabled?: boolean;
}

export type RailProps = RailVariants &
  HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
    expandable?: boolean;
    fab?: Snippet;
  };
