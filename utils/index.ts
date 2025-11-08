import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export { trapFocus } from "./actions";
export * from "./close-button";
export { default as CloseButton } from "./close-button/CloseButton.svelte";
export * from "./dismissable";
export * from "./theme";

export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

let n = Date.now();

export function idGenerator() {
  return (++n).toString(36);
}
