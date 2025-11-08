import type { InputProps } from "$lib/types";
import type { Icon } from "@lucide/svelte";
import type { ClassValue } from "svelte/elements";
import type { ButtonGroupVariants } from "../../buttons/theme";

export type TimePickerOption = {
  name: string;
  value: string;
};

export type TimePickerType = "default" | "range";

export interface TimepickerProps {
  id?: string;
  value?: string;
  endId?: string;
  endValue?: string;
  min?: string;
  max?: string;
  required?: boolean;
  type?: TimePickerType;
  disabled?: boolean;
  inputColor?: InputProps["color"];
  Icon?: typeof Icon;
  iconClass?: string;
  optionLabel?: string;
  options?: TimePickerOption[];
  size?: ButtonGroupVariants["size"];
  divClass?: ClassValue;
  inputClass?: ClassValue;
  onselect?: (data: {
    time: string;
    endTime: string;
    [key: string]: string;
  }) => void;
}
