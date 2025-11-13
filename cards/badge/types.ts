import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import type { badge } from "./theme";

export type BadgeVariants = VariantProps<typeof badge>;

export type BadgeProps = BadgeVariants &
  Omit<HTMLAttributes<HTMLElement>, "color"> & {
    children: Snippet;
  };
