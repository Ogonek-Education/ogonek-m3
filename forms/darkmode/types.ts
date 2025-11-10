import type { HTMLButtonAttributes } from "svelte/elements";

export interface DarkmodeProps extends HTMLButtonAttributes {
  showThemeSelector?: boolean;
  "aria-label"?: string;
}
