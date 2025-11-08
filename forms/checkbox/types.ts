import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { ClassValue } from "tailwind-variants";
import type { ButtonProps } from "../../buttons";
import type { LabelProps } from "../label/types";
import type { CheckboxButtonVariants, CheckboxVariants } from "./theme";

// checkbox
export interface CheckboxItem {
  value: string | number;
  label?: string;
  checked?: boolean | null;
  [key: string]: any;
}

export interface CheckboxProps
  extends CheckboxVariants,
    Omit<HTMLInputAttributes, "children" | "color"> {
  children?: Snippet<
    [{ value?: string | number; checked: boolean } | CheckboxItem]
  >;
  custom?: boolean;
  inline?: boolean;
  tinted?: boolean;
  rounded?: boolean;
  choices?: CheckboxItem[];
  divClass?: ClassValue;
  labelProps?: Omit<LabelProps, "children">;
}

// checkbox-button
export interface CheckboxButtonProps
  extends CheckboxButtonVariants,
    Omit<HTMLInputAttributes, "size" | "checked"> {
  inline?: boolean;
  pill?: boolean;
  size?: ButtonProps["size"];
  color?: ButtonProps["color"];
}
