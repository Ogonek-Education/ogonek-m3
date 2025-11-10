import type { Snippet } from "svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface DarkmodeProps extends HTMLButtonAttributes {
  lightIcon?: Snippet;
  showThemeSelector?: boolean;
  darkIcon?: Snippet;
  size?: "sm" | "md" | "lg";
  "aria-label"?: string;
}
