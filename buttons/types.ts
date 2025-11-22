import type { IconProps } from "$lib";
import type { AnchorButtonAttributes } from "$lib/types";
import type { Icon as LucideIcon } from "@lucide/svelte";
import type { Snippet } from "svelte";
import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLButtonAttributes,
} from "svelte/elements";
import type { ButtonGroupVariants, ButtonVariants, FABVariants } from "./theme";

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
    tooltipContent?: string;
    Icon?: typeof LucideIcon;
    withModal?: boolean;
    formaction?: string;
    withIcon?: boolean;
  };

export type FABProps = FABVariants &
  AnchorButtonAttributes & {
    disabled?: boolean;
    expanded?: boolean;
    label?: string;
    iconProps: IconProps;
    formaction?: string;
  };
