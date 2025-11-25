import type { HTMLAttributes } from "svelte/elements";
import type { TimepickerVariants } from "./theme";

export type TimepickerProps = TimepickerVariants &
  HTMLAttributes<HTMLInputElement> & {
    label?: string;
    value: string;
    name?: string;
  };
