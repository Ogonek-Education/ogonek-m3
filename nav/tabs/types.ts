import type { IconProps } from "$lib/components";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { TabVariants } from "./theme";

export type TabProps = TabVariants &
  HTMLAnchorAttributes & {
    iconProps: IconProps;
    name: string;
    value: string;
    href: string;
  };

export type TabHolderProps = HTMLAnchorAttributes & {
  tab: string;
  secondary?: boolean;
  items: TabProps[];
};
