import type { HTMLAttributes } from "svelte/elements";
import type { SnackBarVariants } from "./theme";

export interface Toast {
  message?: string;
  showClose?: boolean;
  label?: string;
}

export type SnackBarProps = SnackBarVariants &
  HTMLAttributes<HTMLDivElement> & {
    message?: string;
    fixed?: boolean;
    callback?: () => {};
    label?: string;
    showClose?: boolean;
  };
