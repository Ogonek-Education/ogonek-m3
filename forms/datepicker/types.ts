import type { Day } from "date-fns";
import type { Snippet } from "svelte";
import type {
  ClassValue,
  HTMLAttributes,
  HTMLInputAttributes,
} from "svelte/elements";
import type { ButtonProps } from "../../buttons";
import type { DatepickerVariants } from "./theme";

export type DateOrRange = Date | { from?: Date; to?: Date };

export interface ActionSlotParams {
  selectedDate: DateOrRange | undefined;
  handleClear: () => void;
  handleApply: (date: DateOrRange) => void;
  close: () => void;
}

export interface DatepickerProps
  extends DatepickerVariants,
    Omit<HTMLAttributes<HTMLDivElement>, "onselect"> {
  value?: Date;
  defaultDate?: Date | null;
  range?: boolean;
  rangeFrom?: Date;
  rangeTo?: Date;
  availableFrom?: Date | null;
  availableTo?: Date | null;
  locale?: string;
  firstDayOfWeek?: Day;
  dateFormat?: Intl.DateTimeFormatOptions;
  placeholder?: string;
  disabled?: boolean;
  required?: boolean;
  color?: ButtonProps["color"];
  inline?: boolean;
  autohide?: boolean;
  showActionButtons?: boolean;
  title?: string;
  onselect?: (x: DateOrRange) => void;
  onclear?: () => void;
  onapply?: (x: DateOrRange) => void;
  inputmode?: HTMLInputAttributes["inputmode"];
  monthColor?: ButtonProps["color"];
  btnClass?: ClassValue;
  inputClass?: ClassValue;
  monthBtnSelected?: ClassValue;
  monthBtn?: ClassValue;
  translationLocale?: string;
  elementRef?: HTMLInputElement;
  actionSlot?: Snippet<[ActionSlotParams]>;
  inputProps?: HTMLInputAttributes;
}
