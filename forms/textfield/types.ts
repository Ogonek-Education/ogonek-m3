import type { IconProps } from "$lib/components";
import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { TextFieldVariants } from "./theme";

export type TextfieldProps = TextFieldVariants &
  Omit<HTMLInputAttributes, "children" | "value"> & {
    value?: string | number | null;
    label: string;
    id: string;
    placeholder?: ""; // hardcode the shit
    elementRef?: HTMLInputElement;
    supportingText?: Snippet;
    leadingIconProps?: IconProps;
    trailingIconProps?: IconProps;
    characterLimit?: number;
    trailingOnClick?: () => void;
  };
