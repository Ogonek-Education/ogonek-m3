import type { ClassValue } from "svelte/elements";

type Slots<T extends { slots: Record<string, unknown> }> = Omit<
  T["slots"],
  "base"
>;
export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};
