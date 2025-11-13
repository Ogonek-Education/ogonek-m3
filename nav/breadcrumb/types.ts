import type { BreadcrumbItemVariants, BreadcrumbVariants } from "$lib";
import type { Snippet } from "svelte";
import type {
  ClassValue,
  HTMLAttributes,
  HTMLLiAttributes,
} from "svelte/elements";

// breadcrumb
export interface BreadcrumbProps
  extends BreadcrumbVariants,
    HTMLAttributes<HTMLElement> {
  children: Snippet;
  solid?: boolean;
  olClass?: ClassValue;
  ariaLabel?: string;
}

export interface BreadcrumbItemProps
  extends BreadcrumbItemVariants,
    HTMLLiAttributes {
  children: Snippet;
  home?: boolean;
  href?: string;
  linkClass?: ClassValue;
  spanClass?: ClassValue;
  homeClass?: ClassValue;
}
