import type { Snippet } from "svelte";
import type { HTMLAttributes } from "svelte/elements";
import type { PageLayoutVariants } from "./theme";

export interface PageProps
  extends PageLayoutVariants,
    HTMLAttributes<HTMLDivElement> {
  children: Snippet;
  removeBackButton?: boolean;
  buttonClass?: string;
  innerDivClass?: string;
  iconClass?: string;
  Rail?: Snippet;
}
