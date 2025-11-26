import type { ButtonAttrs, DivAttrs, NotButton } from "$lib";
import type { Snippet } from "svelte";
import type {
  HTMLAnchorAttributes,
  HTMLLabelAttributes,
} from "svelte/elements";

export type ActionProps =
  | DivAttrs
  | ButtonAttrs
  | ({ label: true } & NotButton<HTMLLabelAttributes>)
  | ({ href: string } & NotButton<HTMLAnchorAttributes>);

export type ListitemProps = {
  leading?: Snippet;
  selected?: boolean;
  overline?: string;
  headline?: string;
  supporting?: string;
  trailing?: Snippet;
  lines?: 1 | 2 | 3;
} & ActionProps;
