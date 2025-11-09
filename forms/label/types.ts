import type { Snippet } from "svelte";
import type { HTMLLabelAttributes } from "svelte/elements";
import type { LabelVariants } from "./theme";

export interface LabelProps extends HTMLLabelAttributes {
  children: Snippet;
  name?: string;
  clarification?: Snippet;
  color?: LabelVariants["color"];
  show?: boolean;
}
