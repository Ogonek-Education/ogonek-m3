<script lang="ts">
  import { label } from "./theme";
  import clsx from "clsx";
  import type { LabelProps } from "./types";

  let {
    children,
    color = "gray",
    show = true,
    class: className,
    ...restProps
  }: LabelProps = $props();

  let base = $derived(label({ color, class: clsx(className) }));
</script>

{#if show}
  <label {...restProps} class={base}>
    {@render children()}
  </label>
{:else}
  {@render children()}
{/if}
