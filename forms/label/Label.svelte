<script lang="ts">
  import { label } from "./theme";
  import clsx from "clsx";
  import type { LabelProps } from "./types";
  import Secondary from "../../typography/secondary/Secondary.svelte";
  import { P } from "../../typography";

  let {
    children,
    name,
    clarification,
    color = "gray",
    show = true,
    class: className,
    ...restProps
  }: LabelProps = $props();

  let base = $derived(label({ color, class: clsx(className) }));
</script>

{#if show}
  <div
    class="gap-default padding-default relative grid grid-cols-2 items-center justify-between tracking-tight"
  >
    <div class="flex flex-col">
      <P class="text-text-secondary text-xl font-semibold">{name}</P>
      {#if clarification}
        <Secondary>
          {@render clarification()}
        </Secondary>
      {/if}
    </div>
    <div class="gap-default flex flex-col">
      {@render children()}
    </div>
  </div>
{:else}
  {@render children()}
{/if}
