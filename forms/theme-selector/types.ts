import type { HTMLButtonAttributes } from "svelte/elements";

export interface DarkmodeProps extends HTMLButtonAttributes {
  showThemeSelector?: boolean;
  "aria-label"?: string;
}

export type Theme = "light" | "dark" | "griso" | "gruvbox" | "atom" | "auto";
