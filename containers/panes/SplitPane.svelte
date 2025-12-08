<script lang="ts">
  import type { SplitPaneProps } from "./types";
  import { splitPane } from "./theme";
  import { onDestroy, onMount } from "svelte";
  import { padding } from "$lib/stores";
  import clsx from "clsx";

  let leftWidth = $state(396);
  let dragging = false;

  function start(e: PointerEvent) {
    dragging = true;
    (e.target as HTMLElement).setPointerCapture(e.pointerId);
  }

  function move(e: PointerEvent) {
    if (!dragging) return;
    leftWidth = Math.max(150, e.clientX);
  }

  function end(e: PointerEvent) {
    dragging = false;
    (e.target as HTMLElement).releasePointerCapture(e.pointerId);
  }

  const { left, right, centered, class: className }: SplitPaneProps = $props();

  const {
    base,
    drag,
    left: lCls,
    right: rCls,
  } = $derived(splitPane({ centered }));

  onMount(() => {
    padding.set(560);
  });

  onDestroy(() => {
    padding.set(120);
  });
</script>

<div class={base({ class: clsx(className) })}>
  <!-- LEFT PANE -->
  <div class={lCls()} style={`width:${leftWidth}px`}>
    {@render left()}
  </div>

  <!-- RIGHT PANE -->
  <div class={rCls()} style={`margin-left:${leftWidth}px`}>
    {@render right()}
  </div>
</div>
