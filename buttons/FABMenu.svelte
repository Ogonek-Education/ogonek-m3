<script lang="ts">
  import clsx from "clsx";
  import { fabMenu } from "./theme";
  import type { FABMenuProps } from "./types";
  import type { TransitionConfig } from "svelte/transition";
  import { easeEmphasized } from "../utils";

  let {
    children,
    class: className,
    position = "top",
    ...restProps
  }: FABMenuProps = $props();

  const { base } = $derived(fabMenu({ position }));

  const enterFabMenu = (_: Node): TransitionConfig => {
    return {
      duration: 400,
      easing: easeEmphasized,
      css: (t, u) => `clip-path: inset(-100% 0 ${u * 100}% 0 round 1rem);
transform-origin: top;
transform: translateY(${u * -8}px) scaleY(${(t * 0.3 + 0.7) * 100}%);
opacity: ${Math.min(t * 3, 1)};`,
    };
  };
</script>

<ul
  {...restProps}
  class={base({
    class: clsx(className, "fab-menu"),
  })}
  in:enterFabMenu
>
  {@render children()}
</ul>

<style>
  .fab-menu {
    transform-origin: top;
  }
</style>
