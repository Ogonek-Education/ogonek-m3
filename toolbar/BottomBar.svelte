<script lang="ts">
  import { Heading } from "$lib/components/library";
  import type { Snippet } from "svelte";

  let {
    children,
    title,
    subtitle = undefined,
  }: { children?: Snippet; title: string; subtitle?: string } = $props();
</script>

<div
  class="gap-default order-1 grid w-full items-end md:order-2 md:grid-cols-3"
>
  <div class="md:col-span-2">
    <Heading tag="hero">
      {title}
    </Heading>
    {#if subtitle}
      <Heading tag="h2">
        {subtitle}
      </Heading>
    {/if}
  </div>
  {@render children?.()}
</div>
