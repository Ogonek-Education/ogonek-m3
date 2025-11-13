<script lang="ts">
  import { A, Heading } from "$lib/components/library";
  import { sub } from "date-fns";
  import type { Snippet } from "svelte";

  let {
    children,
    title,
    subtitle = undefined,
    href = undefined,
  }: {
    children?: Snippet;
    title: string;
    subtitle?: string;
    href?: string;
  } = $props();
</script>

<div
  class="gap-default order-1 grid w-full items-end md:order-2 md:grid-cols-3"
>
  <div class="md:col-span-2">
    <Heading tag="hero">
      {title}
    </Heading>
    {#if subtitle && !href}
      <Heading tag="h2">
        {subtitle}
      </Heading>
    {:else if subtitle && href}
      <Heading tag="h4">
        <A class="underline" {href}>
          {subtitle}
        </A>
      </Heading>
    {/if}
  </div>
  {@render children?.()}
</div>
