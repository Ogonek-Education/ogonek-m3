import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import type { card } from "./theme";

export type CardVariants = VariantProps<typeof card>;

export type CardProps = CardVariants &
  HTMLAttributes<HTMLAnchorElement> & {
    children: Snippet;
  };
