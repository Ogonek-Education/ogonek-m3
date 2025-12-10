import type { AnchorButtonAttributes, IconProps } from "$lib/components";
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
  FABMenuItemVariants,
  FABMenuVariants,
  FABVariants,
} from "./theme";

export interface ButtonGroupProps
  extends ButtonGroupVariants, HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  disabled?: boolean;
}

export type HTMLButtonOrAnchorAttributes = HTMLButtonAttributes &
  HTMLAnchorAttributes;

export type ButtonMDProps = ButtonMDVariants &
  AnchorButtonAttributes & {
    disabled?: boolean;
    selected?: boolean;
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
    onclick?: () => void;
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
