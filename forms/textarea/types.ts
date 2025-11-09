import type { Snippet } from "svelte";
import type { ClassValue, HTMLTextareaAttributes } from "svelte/elements";
import type { CloseButtonVariants } from "../../utils";
import type { TextareaVariants } from "./theme";

export interface TextareaProps
  extends TextareaVariants,
    HTMLTextareaAttributes {
  header?: Snippet;
  footer?: Snippet;
  addon?: Snippet;
  value?: string | null;
  elementRef?: HTMLTextAreaElement;
  wrapped?: boolean;
  divClass?: ClassValue;
  innerClass?: ClassValue;
  headerClass?: ClassValue;
  footerClass?: ClassValue;
  addonClass?: ClassValue;
  clearable?: boolean;
  clearableSvgClass?: ClassValue;
  clearableColor?: CloseButtonVariants["color"];
  clearableClass?: ClassValue;
  clearableOnClick?: () => void;
  textareaClass?: ClassValue;
}
