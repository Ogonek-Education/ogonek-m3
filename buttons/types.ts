import type { AnchorButtonAttributes } from "$lib/types";
import type { Snippet } from "svelte";
import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLButtonAttributes,
} from "svelte/elements";
import type { ButtonGroupVariants, ButtonVariants } from "./theme";

export interface ButtonGroupProps
  extends ButtonGroupVariants,
    HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  disabled?: boolean;
}

export type HTMLButtonOrAnchorAttributes = Omit<
  HTMLButtonAttributes & HTMLAnchorAttributes,
  "color"
>;

export type ButtonProps = ButtonVariants &
  AnchorButtonAttributes & {
    tag?: string;
    disabled?: boolean;
    loading?: boolean;
  };
