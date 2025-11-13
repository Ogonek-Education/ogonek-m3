import type { Icon } from "@lucide/svelte";
import type { HTMLButtonAttributes } from "svelte/elements";

export interface DarkmodeProps extends HTMLButtonAttributes {
  "aria-label"?: string;
}
export const themeKeys = [
  "light",
  "dark",
  "griso",
  "gruvbox",
  "nord",
  "auto",
] as const;

export type Theme = (typeof themeKeys)[number];

export interface ThemeInfo {
  label: string;
  Icon?: typeof Icon;
  description?: string;
  colors: {
    bgSolid: string;
    bgSecondary: string;
    accent: string;
    primary: string;
    secondary: string;
    tertiary: string;
    border: string;
  };
}
