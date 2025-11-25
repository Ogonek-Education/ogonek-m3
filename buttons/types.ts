import type { IconProps } from "$lib";
import type { AnchorButtonAttributes } from "$lib/types";
import type { Icon as LucideIcon } from "@lucide/svelte";
import type { Snippet } from "svelte";
import type {
  HTMLAnchorAttributes,
  HTMLAttributes,
  HTMLButtonAttributes,
} from "svelte/elements";
import type {
  ButtonGroupVariants,
  ButtonIconVariants,
  ButtonMDVariants,
  ButtonVariants,
  FABMenuItemVariants,
  FABMenuVariants,
  FABVariants,
} from "./theme";

export interface ButtonGroupProps
  extends ButtonGroupVariants,
    HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  disabled?: boolean;
}

export type HTMLButtonOrAnchorAttributes = HTMLButtonAttributes &
  HTMLAnchorAttributes;

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

export type ButtonMDProps = ButtonMDVariants &
  AnchorButtonAttributes & {
    disabled?: boolean;
    iconProps?: IconProps;
    formaction?: string;
    loading?: boolean;
  };

export type ButtonIconProps = ButtonIconVariants &
  AnchorButtonAttributes & {
    disabled?: boolean;
    tooltipContent?: string;
    iconProps: IconProps;
    formaction?: string;
    loading?: boolean;
  };

export type FABProps = FABVariants &
  AnchorButtonAttributes & {
    disabled?: boolean;
    expanded?: boolean;
    label?: string;
    withMenu?: boolean;
    iconProps: IconProps;
    formaction?: string;
    children?: Snippet;
  };

export type FABMenuProps = FABMenuVariants &
  HTMLAttributes<HTMLUListElement> & {
    children: Snippet;
  };

export type FABMenuItemProps = FABMenuItemVariants &
  AnchorButtonAttributes & {
    loading?: boolean;
    children: Snippet;
    iconProps: IconProps;
    formaction?: string;
  };
