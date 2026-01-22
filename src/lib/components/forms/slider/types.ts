import type { IconProps } from "$lib/components";
import type { HTMLInputAttributes } from "svelte/elements";
import type { SliderVariants } from "./theme.js";

export type SliderProps = SliderVariants &
  Omit<HTMLInputAttributes, "size" | "value"> & {
    value: number;
    min?: number;
    max?: number;
    step?: number | "any";
    disabled?: boolean;
    showValue?: boolean;
    leadingIconProps?: IconProps;
    trailingIconProps?: IconProps;
    stops?: boolean;
    endStops?: boolean;
    format?: (value: number) => string;
  };
