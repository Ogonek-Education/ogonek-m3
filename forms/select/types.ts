import type { Snippet } from "svelte";
import type {
  ClassValue,
  FullAutoFill,
  HTMLAttributes,
  HTMLSelectAttributes,
} from "svelte/elements";
import type { MultiSelectVariants, SelectVariants } from "./theme";

export type SelectOptionType<T> = {
  name: string | number;
  value: T;
  disabled?: boolean;
  [key: string]: any;
};

export interface SelectProps<T>
  extends
    SelectVariants,
    Omit<HTMLSelectAttributes, "size" | "disabled" | "color"> {
  children?: Snippet;
  items?: SelectOptionType<T>[];
  elementRef?: HTMLSelectElement;
  disabled?: boolean;
  placeholder?: string;
}

export interface MultiSelectProps<T>
  extends
    MultiSelectVariants,
    Omit<
      HTMLAttributes<HTMLDivElement>,
      "size" | "children" | "onchange" | "onblur"
    > {
  children?: Snippet<[{ item: SelectOptionType<T>; clear: () => void }]>;
  items: SelectOptionType<T>[];
  value: T[];
  dropdownClass?: ClassValue;
  placeholder?: string;
  disabled?: boolean | undefined;
  name?: string | undefined | null;
  form?: string | undefined | null;
  required?: boolean | undefined | null;
  autocomplete?: FullAutoFill | undefined | null;
  onchange?: (event: Event) => void;
  onblur?: (event: FocusEvent) => void;
}
