<script lang="ts">
  import clsx from "clsx";
  import { onMount } from "svelte";
  import type { SupportingPaneProps } from "./types";
  import { supportingPane } from "./theme";

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
  } = $derived(supportingPane({ position, centered }));

  onMount(() => {
    const frame = requestAnimationFrame(() => {
      entered = true;
    });

    return () => cancelAnimationFrame(frame);
  });
</script>

<div class={base({ class: clsx(className) })}>
  <div class={mainCls({ class: clsx(mainClass) })}>
    {@render main()}
  </div>
  <aside
    class={supportingCls({
      class: clsx("supporting-pane__supporting", supportingClass),
    })}
    data-entered={entered}
    data-position={position}
  >
    {@render supporting()}
  </aside>
</div>

<style>
  .supporting-pane__supporting {
    transition:
      opacity 300ms var(--md-sys-motion-timing-function-emphasized-decel);
    opacity: 0;
    will-change: opacity;
  }

  .supporting-pane__supporting[data-entered="true"] {
    opacity: 1;
  }

  @media (prefers-reduced-motion: reduce) {
    .supporting-pane__supporting {
      transition: none;
      opacity: 1;
    }
  }
</style>
