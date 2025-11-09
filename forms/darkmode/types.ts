import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface DarkmodeProps extends HTMLButtonAttributes {
  lightIcon?: Snippet;
  darkIcon?: Snippet;
  size?: "sm" | "md" | "lg";
  ariaLabel?: string;
}
