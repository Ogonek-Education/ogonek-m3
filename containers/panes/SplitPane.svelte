<script lang="ts">
  import type { SplitPaneProps } from "./types";
  import { splitPane } from "./theme";
  import { onDestroy, onMount } from "svelte";
  import { padding } from "$lib/stores";
  import clsx from "clsx";

  let leftWidth = $state(396);

  const { left, right, centered, class: className }: SplitPaneProps = $props();

  const { base, left: lCls, right: rCls } = $derived(splitPane({ centered }));

  onMount(() => {
    padding.set(560);
  });

  onDestroy(() => {
    padding.set(120);
  });
</script>

<div class={base({ class: clsx(className) })}>
  <!-- LEFT PANE -->
  <div
    class={lCls()}
    style={`width:${leftWidth}px; left: var(--splitpane-offset, 0px); transition: left 500ms var(--md-sys-motion-timing-function-emphasized-decel);`}
  >
    {@render left()}
  </div>

  <!-- RIGHT PANE -->
  <div class={rCls()} style={`margin-left:${leftWidth}px`}>
    {@render right()}
  </div>
</div>
