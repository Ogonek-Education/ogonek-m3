import type { Snippet } from "svelte";
import type { ClassValue, HTMLAttributes } from "svelte/elements";
import type { HrVariants } from "./theme";

export interface HrProps extends HrVariants, HTMLAttributes<HTMLElement> {
  children?: Snippet;
  divClass?: ClassValue;
  iconDivClass?: ClassValue;
  textSpanClass?: ClassValue;
  innerDivClass?: ClassValue;
  divProps?: HTMLAttributes<HTMLDivElement>;
  hrProps?: HTMLAttributes<HTMLHRElement>;
}
