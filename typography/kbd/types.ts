import type { KbdVariants } from "$lib";
import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";

export type KbdProps = HTMLAttributes<HTMLElement> &
  KbdVariants & {
    children: Snippet;
  };
