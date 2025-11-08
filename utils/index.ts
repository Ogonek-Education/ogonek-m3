import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export { trapFocus } from "./actions";
export { default as CloseButton } from "./CloseButton.svelte";
export * from "./dismissable";
export * from "./theme";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let n = Date.now();

export function idGenerator() {
  return (++n).toString(36);
}

type Slots<T extends { slots: Record<string, unknown> }> = Omit<
  T["slots"],
  "base"
>;

export type Classes<T extends { slots: Record<string, unknown> }> = {
  classes?: Partial<{ [K in keyof Slots<T>]: ClassValue }>;
};
