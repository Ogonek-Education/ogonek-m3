import type { HTMLAttributes } from "svelte/elements";
import Icon from "./Icon.svelte";
import type { LoadingIndicatorVariants } from "./theme";
export type IconMD = typeof Icon;

export type IconProps = HTMLAttributes<HTMLSpanElement> & {
  name: string;
  fill?: 0 | 1;
  wght?: number; // 100..700
  grad?: number; // -50..200
  opsz?: number; // 20..48
};

export type LoadingIndicatorProps = HTMLAttributes<SVGAElement> &
  LoadingIndicatorVariants & {
    size?: number;
    container?: boolean;
    center?: boolean;
  };
