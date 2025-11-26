import type { Snippet } from "svelte";
import type { HTMLAnchorAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import type { card } from "./theme";

export type CardVariants = VariantProps<typeof card>;

export type CardProps = CardVariants &
  HTMLAnchorAttributes & {
    children: Snippet;
  };
