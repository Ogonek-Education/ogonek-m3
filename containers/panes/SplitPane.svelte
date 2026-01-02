<script lang="ts">
  import type { SplitPaneProps } from "./types";
  import { splitPane } from "./theme";
  import { onDestroy, onMount } from "svelte";
  import { padding } from "$lib/stores";
  import clsx from "clsx";

  let leftWidth = $state(396);
  let dragging = $state(false);

  const storageKey = "splitpane:leftWidth";
  const minLeft = 280;
  const maxLeft = 720;

  const { left, right, centered, class: className }: SplitPaneProps = $props();

  const { base, left: lCls, right: rCls, handle: hCls } = $derived(
    splitPane({ centered }),
  );

  const clampWidth = (next: number) =>
    Math.min(maxLeft, Math.max(minLeft, next));

  const startDrag = (event: PointerEvent) => {
    dragging = true;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent) => {
    if (!dragging) return;
    leftWidth = clampWidth(event.clientX);
  };

  const endDrag = () => {
    dragging = false;
  };

  onMount(() => {
    padding.set(560);

    if (typeof localStorage !== "undefined") {
      const stored = Number(localStorage.getItem(storageKey));
      if (!Number.isNaN(stored)) {
        leftWidth = clampWidth(stored);
      }
    }
  });

  onDestroy(() => {
    padding.set(120);
  });

  $effect(() => {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(storageKey, String(leftWidth));
  });
</script>

<div
  class={base({ class: clsx(className) })}
  style={`--splitpane-left-width: ${leftWidth}px;`}
>
  <!-- LEFT PANE -->
  <div
    class={lCls()}
    style={`width: var(--splitpane-left-width); left: var(--splitpane-offset, 0px); transition: ${dragging ? "none" : "left 500ms var(--md-sys-motion-timing-function-emphasized-decel)"};`}
  >
    {@render left()}
  </div>

  <!-- DRAG HANDLE -->
  <div
    class={hCls()}
    role="separator"
    aria-orientation="vertical"
    aria-valuenow={leftWidth}
    aria-valuemin={minLeft}
    aria-valuemax={maxLeft}
    style={`left: calc(var(--splitpane-left-width) + var(--splitpane-offset, 0px));`}
    on:pointerdown={startDrag}
    on:pointermove={moveDrag}
    on:pointerup={endDrag}
    on:pointercancel={endDrag}
  />

  <!-- RIGHT PANE -->
  <div class={rCls()}>
    {@render right()}
  </div>
</div>
