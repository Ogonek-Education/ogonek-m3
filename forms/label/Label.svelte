<script lang="ts">
  import { label } from "./theme";
  import clsx from "clsx";
  import type { LabelProps } from "./types";
  import Secondary from "../../typography/secondary/Secondary.svelte";
  import { Heading, P } from "../../typography";

  let {
    children,
    name,
    clarification,
    color = "gray",
    show = true,
    class: className,
    ...restProps
  }: LabelProps = $props();

  let base = $derived(label({ class: clsx(className) }));
</script>

{#if show}
  <div class={base}>
    <div class="space-y-2">
      <Heading tag="h3">
        {name}
      </Heading>
      {#if clarification}
        <Secondary>
          {@render clarification()}
        </Secondary>
      {/if}
    </div>
    <div class="gap-default flex w-full flex-col">
      {@render children()}
    </div>
  </div>
{:else}
  {@render children()}
{/if}
