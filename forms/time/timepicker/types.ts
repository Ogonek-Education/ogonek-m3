import type { Icon } from "@lucide/svelte";
import type { ClassValue } from "svelte/elements";

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
  Icon?: typeof Icon;
  iconClass?: string;
  optionLabel?: string;
  options?: TimePickerOption[];
  divClass?: ClassValue;
  inputClass?: ClassValue;
  oninput?: () => void;
  onchange?: (value: string) => void;
  onselect?: (data: {
    time: string;
    endTime: string;
    [key: string]: string;
  }) => void;
}
