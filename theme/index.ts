import type { ClassValue } from "clsx";
import * as themes from "./themes";

export type ThemeConfig = {
  [K in keyof typeof themes]?: (typeof themes)[K]["slots"] extends undefined
    ? ClassValue
    : Partial<{ [L in keyof (typeof themes)[K]["slots"]]: ClassValue }>;
};

type Slots<T extends { slots: Record<string, unknown> }> = Omit<
  T["slots"],
  "base"
>;
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};
