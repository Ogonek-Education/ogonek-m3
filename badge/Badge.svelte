<script lang="ts">
  import clsx from "clsx";
  import { badge } from "./theme";
  import type { BadgeProps } from "./types";

  const {
    number,
    size = "lg",
    class: className,
    ...restProps
  }: BadgeProps = $props();

  const styling = $derived(badge({ size }));
</script>

{#if number}
  <div class={clsx(styling, className)} {...restProps}>
    {#if size != "sm"}
      {number > 99 ? "99+" : number}
    {/if}
  </div>
{/if}
