import type { Snippet } from "svelte";
import type { HTMLInputAttributes } from "svelte/elements";
import type { ClassValue } from "tailwind-variants";
import type { LabelProps } from "../label/types";
import type { CheckboxVariants } from "./theme";

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
