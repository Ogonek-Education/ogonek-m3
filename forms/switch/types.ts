import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { ClassValue } from "tailwind-variants";
import type { ToggleVariants } from "./theme";

export interface ToggleProps
  extends
    Omit<ToggleVariants, "off_state_label">,
    Omit<HTMLInputAttributes, "size" | "color"> {
  offLabel?: Snippet;
  value?: string | number;
  checked?: boolean;
  disabled?: boolean;
  spanClass?: ClassValue;
  inputClass?: ClassValue;
}
