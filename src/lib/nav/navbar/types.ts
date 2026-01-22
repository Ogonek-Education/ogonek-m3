import type { IconProps } from "$lib/components";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import type { navbar, navitem } from "./theme.js";

export type NavItemVariants = VariantProps<typeof navitem>;

export type NavBarVariants = VariantProps<typeof navbar>;

export type NavItemProps = NavBarVariants &
  HTMLAttributes<HTMLAnchorElement> & {
    label: string;
    badge?: number;
    href: string;
    iconProps: IconProps;
  };

export type NavBarProps = NavBarVariants &
  HTMLAttributes<HTMLDivElement> & {
    children: Snippet;
  };
