import type { IconProps } from "$lib/components";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { TextFieldVariants } from "./theme";

export type TextFieldValue = string | number | undefined | null;

export type TextfieldProps<T extends TextFieldValue = string> =
  TextFieldVariants &
    Omit<HTMLInputAttributes, "children" | "value"> & {
      value?: T;
      label: string;
      id: string;
      placeholder?: ""; // hardcode the shit
      elementRef?: HTMLInputElement;
      supportingText?: Snippet;
      leadingIconProps?: IconProps;
      trailingIconProps?: IconProps;
      characterLimit?: number;
      trailingOnClick?: () => {};
    };
