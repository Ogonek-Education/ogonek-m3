import type { IconProps } from "$lib";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { SearchVariants } from "./theme";

export interface SearchProps
  extends SearchVariants,
    Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  value?: string;
  elementRef?: HTMLInputElement;
  leadingIconProps?: IconProps;
  trailingIconProps?: IconProps;
}
