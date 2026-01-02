<script lang="ts">
  import type { SplitPaneProps } from "./types";
  import { splitPane } from "./theme";
  import { onDestroy, onMount } from "svelte";
  import { padding } from "$lib/stores";
  import clsx from "clsx";

  let container: HTMLDivElement | null = $state(null);
  let leftWidth = $state(396);
  let dragging = $state(false);
  let containerWidth = $state(0);

  const storageKey = "splitpane:leftWidth";
  const minLeft = 280;
  const minRight = 320;

  const { left, right, centered, class: className }: SplitPaneProps = $props();

  const {
    base,
    left: lCls,
    right: rCls,
    handle: hCls,
    handleGrip: hGripCls,
    handleGripLine: hGripLineCls,
  } = $derived(splitPane({ centered }));

  const maxLeft = $derived(() =>
    Math.max(minLeft, containerWidth - minRight),
  );

  const clampWidth = (next: number) =>
    Math.min(maxLeft, Math.max(minLeft, next));

  const startDrag = (event: PointerEvent) => {
    dragging = true;
    (event.currentTarget as HTMLElement).setPointerCapture(event.pointerId);
  };

  const moveDrag = (event: PointerEvent) => {
    if (!dragging) return;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    leftWidth = clampWidth(event.clientX - rect.left);
  };

  const endDrag = () => {
    dragging = false;
  };

  onMount(() => {
    padding.set(560);

    let cleanup: (() => void) | undefined;

    if (container) {
      const setWidth = () => {
        containerWidth = container?.getBoundingClientRect().width ?? 0;
      };
      setWidth();
      if (typeof ResizeObserver !== "undefined") {
        const observer = new ResizeObserver(setWidth);
        observer.observe(container);
        cleanup = () => observer.disconnect();
      } else {
        window.addEventListener("resize", setWidth);
        cleanup = () => window.removeEventListener("resize", setWidth);
      }
    }

    if (typeof localStorage !== "undefined") {
      const stored = Number(localStorage.getItem(storageKey));
      if (!Number.isNaN(stored)) {
        leftWidth = clampWidth(stored);
      }
    }

    return cleanup;
  });

  onDestroy(() => {
    padding.set(120);
  });

  $effect(() => {
    if (typeof localStorage === "undefined") return;
    localStorage.setItem(storageKey, String(leftWidth));
  });

  $effect(() => {
    if (leftWidth > maxLeft) {
      leftWidth = maxLeft;
    }
  });
</script>

<div
  bind:this={container}
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
  >
    <span class={hGripCls()}>
      <span class={hGripLineCls()}></span>
      <span class={hGripLineCls()}></span>
      <span class={hGripLineCls()}></span>
    </span>
  </div>

  <!-- RIGHT PANE -->
  <div class={rCls()}>
    {@render right()}
  </div>
</div>
