<script lang="ts">
  import clsx from "clsx";
  import { fabMenu } from "./theme";
  import type { FABMenuProps } from "./types";
  import type { TransitionConfig } from "svelte/transition";
  import { enterExit } from "$lib/animation";

  let {
    children,
    class: className,
    position = "top",
    ...restProps
  }: FABMenuProps = $props();

  const { base } = $derived(fabMenu({ position }));
</script>

<ul
  {...restProps}
  class={base({
    class: clsx(className, "fab-menu"),
  })}
  in:enterExit
>
  {@render children()}
</ul>

<style>
  .fab-menu {
    transform-origin: top;
  }
</style>
