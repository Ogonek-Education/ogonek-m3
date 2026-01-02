<script lang="ts">
  import clsx from "clsx";
  import type { SupportingPaneProps } from "./types";
  import { supportingPane } from "./theme";
  import { ButtonIcon } from "$lib/components";
  import { easeEmphasizedDecel, enterExit } from "$lib/animation";
  import { fly } from "svelte/transition";

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
  let supportingVisible = $state(true);
  const supportingId = "supporting-pane";

  const {
    base,
    main: mainCls,
    supporting: supportingCls,
  } = $derived(supportingPane({ position, centered }));
</script>

<div class={base({ class: clsx(className) })}>
  <div class={mainCls({ class: clsx("relative", mainClass) })}>
    <div class="top-3 right-3 z-10 hidden h-10 w-10 md:absolute md:block">
      <ButtonIcon
        variant="text"
        tooltipContent={supportingVisible ? "Скрыть панель" : "Показать панель"}
        size="sm"
        iconProps={{
          name: supportingVisible ? "right_panel_close" : "right_panel_open",
        }}
        aria-controls={supportingId}
        aria-expanded={supportingVisible}
        aria-label={supportingVisible
          ? "Hide supporting pane"
          : "Show supporting pane"}
        onclick={() => {
          supportingVisible = !supportingVisible;
        }}
      />
    </div>
    {@render main()}
  </div>
  {#if supportingVisible}
    <aside
      id={supportingId}
      class={supportingCls({
        class: clsx(supportingClass),
      })}
      data-entered={entered}
      data-position={position}
      in:fly={{ x: 100, easing: easeEmphasizedDecel }}
    >
      {@render supporting()}
    </aside>
  {/if}
</div>
