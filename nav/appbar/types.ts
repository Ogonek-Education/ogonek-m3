import type { AppbarVariants, IconProps } from "$lib";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export type AppBarProps = AppbarVariants &
  HTMLAttributes<HTMLElementTagNameMap["nav"]> & {
    children: Snippet;
    title: string;
    subtitle?: string;
    leadingIcon?: IconProps;
    trailingIcon?: IconProps;
    leadingClick?: () => void;
    trailingClick?: () => void;
  };
