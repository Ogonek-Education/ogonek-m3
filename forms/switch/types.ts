import type { IconProps } from "$lib/components";
import type { HTMLInputAttributes } from "svelte/elements";
import type { SwitchVariants } from "./theme";

export type SwitchProps = SwitchVariants &
  Omit<HTMLInputAttributes, "size"> & {
    checked?: boolean;
    disabled?: boolean;
    checkedIconProps?: IconProps;
    uncheckedIconProps?: IconProps;
  };
