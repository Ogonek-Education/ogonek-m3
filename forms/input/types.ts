import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { InputVariants } from "./theme";

export type InputValue = string | number | string[] | undefined | null;

export interface InputProps<T extends InputValue = string>
  extends InputVariants,
    Omit<HTMLInputAttributes, "size" | "children" | "value"> {
  children?: Snippet<
    [
      { class: string } & Omit<
        InputProps<T>,
        "children" | "left" | "right" | "size"
      >,
    ]
  >;
  clearable?: boolean;
  value?: T;
  elementRef?: HTMLInputElement;
  clarification?: Snippet;
  color?: InputVariants["color"];
  size?: InputVariants["size"];
  onSelect?: (item: string) => void;
  oninput?: (event: Event) => void;
  onfocus?: (event: FocusEvent) => void;
  onblur?: (event: FocusEvent) => void;
  onkeydown?: (event: KeyboardEvent) => void;
}
