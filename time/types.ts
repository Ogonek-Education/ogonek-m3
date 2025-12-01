import type { HTMLAttributes } from "svelte/elements";
import type { TimepickerVariants } from "./theme";

export type TimepickerProps = TimepickerVariants &
  HTMLAttributes<HTMLInputElement> & {
    label?: string;
    time: string;
    name?: string;
    close: () => void;
    setTime: (time: string) => void;
  };
