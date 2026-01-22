import type { TransitionConfig } from "svelte/transition";
import { easeEmphasized } from "./easing.js";

export const enterExit = (_: Node): TransitionConfig => {
  return {
    duration: 400,
    easing: easeEmphasized,
    css: (t, u) => `clip-path: inset(-100% 0 ${u * 100}% 0 round 1rem);
transform-origin: var(--enter-exit-origin, top);
transform: scaleY(${(t * 0.3 + 0.7) * 100}%);
opacity: ${Math.min(t * 3, 1)};`,
  };
};
