import type { ClassValue, HTMLTextareaAttributes } from "svelte/elements";
import type { TextareaVariants } from "./theme";

export interface TextareaProps
  extends TextareaVariants, Omit<HTMLTextareaAttributes, "color"> {
  value?: string | null;
  elementRef?: HTMLTextAreaElement;
  divClass?: ClassValue;
  textareaClass?: ClassValue;
}
