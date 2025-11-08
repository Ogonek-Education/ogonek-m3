import type { CloseButtonVariants } from "$lib/components/library/utils/close-button/theme";
import type {
  HTMLAnchorAttributes,
  HTMLButtonAttributes,
} from "svelte/elements";

export const xs = "xs";
export const sm = "sm";
export const md = "md";
export const lg = "lg";
export const xl = "xl";

export type SizeType =
  | typeof xs
  | typeof sm
  | typeof md
  | typeof lg
  | typeof xl;

export type CloseButtonProps = CloseButtonVariants &
  AnchorButtonAttributes & {
    onclick?: (ev: MouseEvent) => void;
    name?: string;
    ariaLabel?: string;
    class?: string;
    svgClass?: string;
  };

export type AnchorButtonAttributes =
  | ({ href: string } & HTMLAnchorAttributes)
  | ({ href?: undefined } & HTMLButtonAttributes);
