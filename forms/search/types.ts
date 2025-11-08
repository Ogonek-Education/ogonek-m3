import type { Snippet } from "svelte";
import type { ClassValue, HTMLInputAttributes } from "svelte/elements";
import type { CloseButtonVariants } from "../../utils";
import type { SearchVariants } from "./theme";

export interface SearchProps
  extends SearchVariants,
    Omit<HTMLInputAttributes, "size"> {
  children?: Snippet;
  value?: string;
  elementRef?: HTMLInputElement;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  inputClass?: ClassValue;
}
