<script lang="ts">
  import clsx from "clsx";
  import { singlePane, type SinglePaneVariants } from "./theme";
  import type { Snippet } from "svelte";

  const {
    children,
    headline,
    background = "filled",
    centered = true,
    class: className,
  }: {
    children: Snippet;
    headline?: string;
    class?: string;
  } & SinglePaneVariants = $props();

  const {
    base,
    content,
    headline: headlineCls,
  } = $derived(singlePane({ background, centered }));
</script>

<div class={base()}>
  {#if headline}
    <div class={headlineCls()}>{headline}</div>
  {/if}
  <div class={content({ class: clsx(className) })}>{@render children()}</div>
</div>
