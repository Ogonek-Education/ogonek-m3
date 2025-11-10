import type { ClassValue, HTMLTextareaAttributes } from "svelte/elements";
import type { CloseButtonVariants } from "../../utils";
import type { TextareaVariants } from "./theme";

export interface TextareaProps
  extends TextareaVariants,
    Omit<HTMLTextareaAttributes, "color"> {
  value?: string | null;
  elementRef?: HTMLTextAreaElement;
  divClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  textareaClass?: ClassValue;
}
