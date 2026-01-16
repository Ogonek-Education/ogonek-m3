<script lang="ts">
  import clsx from "clsx";
  import Body from "../../typography/body/Body.svelte";
  import Title from "../../typography/title/Title.svelte";
  import Layer from "../../utils/Layer.svelte";
  import { autoUpdate } from "@floating-ui/dom";
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
    closeDelay = 200,
    class: className,
    variant = "rich",
    interaction = "hover",
    strategy,
    style = "container",
    isOpen = false,
    showArrow = false,
    showScrim = false,
    ...restProps
  }: TooltipProps = $props();

  const {
    arrow: arrowCls,
    scrim: scrimCls,
    subhead: subheadCls,
    base,
    textContainer,
    trigger: triggerCls,
    supportingText: supportingTextCls,
  } = $derived(tooltip({ variant, style }));

  const baseCls = $derived(base({ class: clsx(className) }));
  const isHoverInteraction = $derived(interaction === "hover");
  const hasTooltipContent = $derived(
    Boolean(supportingText || subhead || (variant === "rich" && children)),
  );
  let anchor: HTMLSpanElement | null = $state(null);
  let tooltipEl: HTMLDivElement | null = $state(null);
  let arrowEl: HTMLDivElement | null = $state(null);
  let scrimEl: HTMLDivElement | null = $state(null);
  let scrimCleanup: VoidFunction | null = null;
  let openTimer: number | null = null;
  let closeTimer: number | null = null;
  const scrimPadding = 12;

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

  function close(event?: MouseEvent | FocusEvent) {
    if (!isHoverInteraction || tutorial) return;
    const nextTarget = event?.relatedTarget as Node | null;
    if (
      nextTarget &&
      (anchor?.contains(nextTarget) || tooltipEl?.contains(nextTarget))
    ) {
      return;
    }
    clearTimers();
    closeTimer = window.setTimeout(() => {
      isOpen = false;
    }, closeDelay);
  }

  const updateScrim = () => {
    if (!anchor || !scrimEl) return;
    const rect = anchor.getBoundingClientRect();
    const paddedLeft = rect.left - scrimPadding;
    const paddedTop = rect.top - scrimPadding;
    const paddedWidth = rect.width + scrimPadding * 2;
    const paddedHeight = rect.height + scrimPadding * 2;
    Object.assign(scrimEl.style, {
      left: `${paddedLeft}px`,
      top: `${paddedTop}px`,
      width: `${paddedWidth}px`,
      height: `${paddedHeight}px`,
    });
  };

  const stopScrim = () => {
    scrimCleanup?.();
    scrimCleanup = null;
  };

  $effect(() => {
    stopScrim();
    if (!showScrim || !isOpen || !anchor || !scrimEl) return;
    scrimCleanup = autoUpdate(anchor, scrimEl, updateScrim, {
      ancestorScroll: true,
      ancestorResize: true,
      elementResize: true,
      layoutShift: true,
      animationFrame: false,
    });
    updateScrim();
    return () => stopScrim();
  });
</script>

<span
  class={triggerCls({ class: clsx(triggerClass) })}
  bind:this={anchor}
  onmouseenter={open}
  onmouseleave={(event) => close(event)}
  onfocusin={open}
  role="tooltip"
  onfocusout={(event) => close(event)}
>
  {@render trigger?.()}
  {#if isOpen && hasTooltipContent}
    {#if showScrim}
      <div
        class={scrimCls()}
        bind:this={scrimEl}
        aria-hidden="true"
        style="box-shadow: 0 0 0 9999px rgba(0, 0, 0, 0.22); filter: blur(1px);"
      ></div>
    {/if}
    <div
      class={baseCls}
      bind:this={tooltipEl}
      role="tooltip"
      aria-hidden={!isOpen}
      use:floating={{
        reference: anchor,
        placement,
        strategy,
        offsetPx: offset,
        arrowEl: showArrow ? arrowEl : null,
      }}
      onmouseenter={() => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      }}
      onmouseleave={(event) => close(event)}
      {...restProps}
    >
      {#if showArrow}
        <div class={arrowCls()} bind:this={arrowEl} aria-hidden="true"></div>
      {/if}
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
