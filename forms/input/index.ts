import type { SizeType } from "$lib/types/components/shared";

export { default as Input } from "./Input.svelte";
export * from "./theme";

export function clampSize(s: SizeType) {
  return s && s === "xs" ? "sm" : s === "xl" ? "lg" : s;
}
