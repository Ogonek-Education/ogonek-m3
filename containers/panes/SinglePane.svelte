<script lang="ts">
  import clsx from "clsx";
  import { singlePane, type SinglePaneVariants } from "./theme";
  import type { Snippet } from "svelte";

  const {
    children,
    headline,
    padding = "md",
    background = "filled",
    centered = true,
    full = true,
    class: className,
    contentClass,
  }: {
    children: Snippet;
    headline?: string;
    class?: string;
    contentClass?: string;
  } & SinglePaneVariants = $props();

  const {
    base,
    content,
    headline: headlineCls,
  } = $derived(singlePane({ background, centered, padding, full }));
</script>

<div class={base({ class: clsx(className) })}>
  <div class={content({ class: clsx(contentClass) })}>
    {#if headline}
      <div class={headlineCls()}>{headline}</div>
    {/if}
    {@render children()}
  </div>
</div>
