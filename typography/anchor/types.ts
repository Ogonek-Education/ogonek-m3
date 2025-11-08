import type { Snippet } from "svelte";
import type { AnchorVariants } from "./theme";

export interface AnchorProps {
  children: Snippet;
  color?: AnchorVariants["color"];
  asButton?: boolean;
  onclick?: (event: MouseEvent) => void;
  // Common attributes that make sense for both button and anchor
  id?: string;
  class?: string;
  style?: string;
  tabindex?: number;
  title?: string;
  role?: string;
  "aria-label"?: string;
  "data-testid"?: string;
  // Anchor-specific attributes (used when asButton is false)
  href?: string;
  target?: string;
  rel?: string;
  download?: string | boolean;
  // Button-specific attributes (used when asButton is true)
  type?: "button" | "submit" | "reset";
  disabled?: boolean;
  name?: string;
  value?: string | number | string[];
  // Allow any other attributes (like data-* attributes)
  [key: string]: any;
}
