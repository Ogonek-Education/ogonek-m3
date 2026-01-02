<script lang="ts">
  import clsx from "clsx";
  import { onMount } from "svelte";
  import type { SupportingPaneProps } from "./types";
  import { supportingPane } from "./theme";
  import { fade, fly } from "svelte/transition";

  const {
    main,
    supporting,
    position = "right",
    centered = false,
    class: className,
    mainClass,
    supportingClass,
  }: SupportingPaneProps = $props();

  let entered = $state(false);

  const {
    base,
    main: mainCls,
    supporting: supportingCls,
    scrim: scrimCls,
  } = $derived(supportingPane({ position, centered }));
</script>

<div class={base({ class: clsx(className) })}>
  <div class={mainCls({ class: clsx(mainClass) })}>
    {@render main()}
  </div>
  <aside
    class={supportingCls({
      class: clsx(supportingClass),
    })}
    data-entered={entered}
    data-position={position}
  >
    {@render supporting()}
  </aside>
  <div class={scrimCls()} aria-hidden="true"></div>
</div>

<style>
  @media (min-width: 768px) {
    :global(.supporting-pane) {
      transition:
        transform 500ms var(--md-sys-motion-timing-function-emphasized-decel),
        box-shadow 300ms var(--md-sys-motion-timing-function-emphasized-decel);
    }

    :global(.supporting-pane[data-position="right"]) {
      transform: translate3d(0, 0, 0);
    }

    :global(.supporting-pane[data-position="left"]) {
      transform: translate3d(0, 0, 0);
    }

    :global(.supporting-pane[data-position="right"]:hover),
    :global(.supporting-pane[data-position="right"]:focus-within) {
      transform: translate3d(-1rem, -0.25rem, 0);
    }

    :global(.supporting-pane[data-position="left"]:hover),
    :global(.supporting-pane[data-position="left"]:focus-within) {
      transform: translate3d(1rem, -0.25rem, 0);
    }
  }

  @media (min-width: 1280px) {
    :global(.supporting-pane[data-position="right"]:hover),
    :global(.supporting-pane[data-position="right"]:focus-within) {
      transform: translate3d(-1.5rem, -0.25rem, 0);
    }

    :global(.supporting-pane[data-position="left"]:hover),
    :global(.supporting-pane[data-position="left"]:focus-within) {
      transform: translate3d(1.5rem, -0.25rem, 0);
    }
  }

  @media (min-width: 1536px) {
    :global(.supporting-pane),
    :global(.supporting-pane:hover),
    :global(.supporting-pane:focus-within) {
      transform: translate3d(0, 0, 0);
      transition: none;
    }
  }
</style>
