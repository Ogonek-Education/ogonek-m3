<script lang="ts">
  import { centralPane } from "./theme";
  import type { Snippet } from "svelte";

  const { children }: { children: Snippet } = $props();

  const { base, content } = centralPane();
</script>

<div class={base()}>
  <div class={content()}>{@render children()}</div>
</div>
