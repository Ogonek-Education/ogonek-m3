import type { KbdVariants } from "$lib/components";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export type KbdProps = HTMLAttributes<HTMLElement> &
  KbdVariants & {
    children: Snippet;
  };
