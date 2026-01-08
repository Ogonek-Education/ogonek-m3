<script lang="ts">
  import clsx from "clsx";
  import Body from "../../typography/body/Body.svelte";
  import Title from "../../typography/title/Title.svelte";
  import Layer from "../../utils/Layer.svelte";
  import { tooltip } from "./theme";
  import type { TooltipProps } from "./types";
  import { floating } from "$lib/components";

  let {
    subhead,
    supportingText,
    children,
    trigger,
    triggerClass,
    placement = "top",
    offset = 10,
    openDelay = 50,
    tutorial,
    closeDelay,
    class: className,
    variant = "rich",
    interaction = "hover",
    strategy,
    style = "container",
    isOpen = false,
    ...restProps
  }: TooltipProps = $props();

  const {
    subhead: subheadCls,
    base,
    textContainer,
    trigger: triggerCls,
    supportingText: supportingTextCls,
  } = $derived(tooltip({ variant, style }));

  const id = crypto.randomUUID();
  const baseCls = $derived(base({ class: clsx(className) }));
  const isHoverInteraction = $derived(interaction === "hover");
  let anchor: HTMLSpanElement | null = $state(null);
  let tooltipEl: HTMLDivElement | null = $state(null);
  let openTimer: number | null = null;
  let closeTimer: number | null = null;

  const clearTimers = () => {
    if (openTimer) {
      clearTimeout(openTimer);
      openTimer = null;
    }
    if (closeTimer) {
      clearTimeout(closeTimer);
      closeTimer = null;
    }
  };

  function open() {
    if (!isHoverInteraction || tutorial) return;
    clearTimers();
    openTimer = window.setTimeout(async () => {
      isOpen = true;
    }, openDelay);
  }

  function close() {
    if (!isHoverInteraction || tutorial) return;
    clearTimers();
    closeTimer = window.setTimeout(() => {
      isOpen = false;
    }, closeDelay);
  }
</script>

<span
  class={triggerCls({ class: clsx(triggerClass) })}
  bind:this={anchor}
  onmouseenter={open}
  onmouseleave={close}
  onfocusin={open}
  role="tooltip"
  onfocusout={close}
>
  {@render trigger?.()}
  {#if isOpen && supportingText}
    <div
      {id}
      class={baseCls}
      bind:this={tooltipEl}
      role="tooltip"
      aria-hidden={!isOpen}
      use:floating={{
        reference: anchor,
        placement,
        strategy,
      }}
      onmouseenter={() => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      }}
      onmouseleave={close}
      {...restProps}
    >
      {#if variant === "rich"}
        <Layer />
      {/if}
      <div class={textContainer()}>
        {#if subhead}
          <Title class={subheadCls()}>
            {subhead}
          </Title>
        {/if}
        {#if supportingText}
          <Body class={supportingTextCls()}>
            {supportingText}
          </Body>
        {/if}
      </div>
      {#if variant === "rich"}
        {@render children?.()}
      {/if}
    </div>
  {/if}
</span>
