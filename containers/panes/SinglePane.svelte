<script lang="ts">
  import { singlePane, type SinglePaneVariants } from "./theme";
  import type { Snippet } from "svelte";

  const {
    children,
    headline,
    background = "transparent",
  }: { children: Snippet; headline?: string } & SinglePaneVariants = $props();

  const { base, content, headline: headlineCls } = singlePane({ background });
</script>

<div class={base()}>
  {#if headline}
    <div class={headlineCls()}>{headline}</div>
  {/if}
  <div class={content()}>{@render children()}</div>
</div>
