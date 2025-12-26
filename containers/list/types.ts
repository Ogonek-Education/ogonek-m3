import type { ButtonAttrs, DivAttrs, NotButton } from "$lib/components";
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
  overline?: string | null;
  headline?: string;
  supporting?: string | null;
  trailing?: Snippet;
  lines?: 1 | 2 | 3;
  asChild?: boolean;
} & ActionProps;
