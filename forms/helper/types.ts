import type { HTMLAttributes } from "svelte/elements";
import type { HelperVariants } from "./theme";

export interface HelperProps
  extends HelperVariants,
    Omit<HTMLAttributes<HTMLParagraphElement>, "color"> {}
