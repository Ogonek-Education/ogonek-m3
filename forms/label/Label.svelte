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

  let base = $derived(label({ color, class: clsx(className) }));
</script>

{#if show}
  <div
    class="gap-narrow padding-default relative grid items-center justify-between px-0 tracking-tight md:grid-cols-2 md:px-2.5"
  >
    <div class="flex w-full flex-col">
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
