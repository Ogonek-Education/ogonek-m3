<script lang="ts">
  import type { SplitPaneProps } from "./types";
  import { splitPane } from "./theme";
  import { onDestroy, onMount } from "svelte";
  import { padding } from "$lib/stores";
  import clsx from "clsx";

  let dragging = $state(false);

  let {
    left,
    right,
    centered,
    leftWidth = $bindable(396),
    minLeft = 280,
    maxLeft = 720,
    storageKey = "splitpane:leftWidth",
    persist = true,
    class: className,
  }: SplitPaneProps = $props();

  const {
    base,
    left: lCls,
    right: rCls,
    handle: hCls,
    handleGrip,
    handlePip,
  } = $derived(splitPane({ centered }));

  const clampWidth = (next: number) =>
    Math.min(maxLeft, Math.max(minLeft, next));

  const footerPaddingOffset = 80;

  let dragStartX = 0;
  let dragStartWidth = 0;
  let mounted = false;

  const startDrag = (event: PointerEvent) => {
    dragging = true;
    dragStartX = event.clientX;
    dragStartWidth = leftWidth;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent) => {
    if (!dragging) return;
    const delta = event.clientX - dragStartX;
    leftWidth = clampWidth(dragStartWidth + delta);
  };

  const endDrag = () => {
    dragging = false;
  };

  onMount(() => {
    mounted = true;

    if (persist && typeof localStorage !== "undefined") {
      const stored = Number(localStorage.getItem(storageKey));
      if (!Number.isNaN(stored)) {
        leftWidth = clampWidth(stored);
      }
    }

    padding.set(leftWidth + footerPaddingOffset);
  });

  onDestroy(() => {
    padding.set(0);
  });

  $effect(() => {
    if (!mounted) return;
    padding.set(leftWidth + footerPaddingOffset);
  });

  $effect(() => {
    if (!persist || typeof localStorage === "undefined") return;
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
    style="left: calc(var(--splitpane-left-width) + var(--splitpane-offset, 0px));"
    onpointerdown={startDrag}
    onpointermove={moveDrag}
    onpointerup={endDrag}
    onpointercancel={endDrag}
  >
    <div
      class={handleGrip({
        class: clsx(dragging && "w-0.5"),
      })}
    ></div>
  </div>

  <!-- RIGHT PANE -->
  <div class={rCls()}>
    {@render right()}
  </div>
</div>
