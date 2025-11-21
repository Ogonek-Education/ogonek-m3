import type { Icon as LucideIcon } from "@lucide/svelte";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { RailItemVariants, RailVariants } from "./theme";

export interface RailItemProps
  extends RailItemVariants,
    HTMLAttributes<HTMLAnchorElement> {
  children: Snippet;
  Icon?: typeof LucideIcon;
  badge?: number;
  external?: boolean;
  href: string;
  name: string;
}

export type RailProps = RailVariants &
  HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
  };
