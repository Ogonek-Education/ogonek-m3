import type { HTMLAttributes } from "svelte/elements";
import type { VariantProps } from "tailwind-variants";
import type { badge } from "./theme";

export type BadgeVariants = VariantProps<typeof badge>;
export type BadgeProps = BadgeVariants &
  HTMLAttributes<HTMLDivElement> & {
    number?: number;
  };
