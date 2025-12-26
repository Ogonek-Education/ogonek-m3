<script lang="ts">
  import clsx from "clsx";
  import { onMount, tick } from "svelte";
  import Body from "../../typography/body/Body.svelte";
  import Title from "../../typography/title/Title.svelte";
  import Layer from "../../utils/Layer.svelte";
  import { tooltip } from "./theme";
  import type { TooltipProps } from "./types";

  const {
    subhead,
    supportingText,
    children,
    trigger,
    triggerClass,
    placement = "top",
    offset = 10,
    openDelay = 120,
    closeDelay = 100,
    class: className,
    ...restProps
  }: TooltipProps = $props();

  const {
    subhead: subheadCls,
    base,
    textContainer,
    supportingText: supportingTextCls,
  } = $derived(tooltip());

  const id = crypto.randomUUID();
  const baseCls = $derived(
    base({ class: clsx("pointer-events-auto", className) }),
  );
  let isOpen = $state(false);
  let anchor: HTMLSpanElement;
  let tooltipEl: HTMLDivElement | null = $state(null);
  let coords = $state({ top: 0, left: 0 });
  let openTimer: number | null = null;
  let closeTimer: number | null = null;

  const setDescribedBy = () => {
    if (!anchor) return;
    const target = anchor.querySelector<HTMLElement>(
      "button, [role='button'], a, input, textarea, select, [tabindex]",
    );
    target?.setAttribute("aria-describedby", id);
  };

  const clamp = (value: number, min: number, max: number) =>
    Math.min(Math.max(value, min), max);

  const updatePosition = async () => {
    await tick();
    if (!anchor || !tooltipEl) return;

    const anchorRect = anchor.getBoundingClientRect();
    const tooltipRect = tooltipEl.getBoundingClientRect();
    const margin = 8;
    let top =
      placement === "bottom"
        ? anchorRect.bottom + offset
        : anchorRect.top - tooltipRect.height - offset;

    // Flip if there isn't room in the preferred direction
    if (placement === "top" && top < margin) {
      top = anchorRect.bottom + offset;
    } else if (
      placement === "bottom" &&
      top + tooltipRect.height > window.innerHeight - margin
    ) {
      top = anchorRect.top - tooltipRect.height - offset;
    }

    let left = anchorRect.left + anchorRect.width / 2 - tooltipRect.width / 2;
    left = clamp(left, margin, window.innerWidth - tooltipRect.width - margin);

    top = clamp(top, margin, window.innerHeight - margin);
    coords = { top: top - anchorRect.top, left: left - anchorRect.left };
  };

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

  const open = () => {
    clearTimers();
    openTimer = window.setTimeout(async () => {
      isOpen = true;
      await updatePosition();
      setDescribedBy();
    }, openDelay);
  };

  const close = () => {
    clearTimers();
    closeTimer = window.setTimeout(() => {
      isOpen = false;
    }, closeDelay);
  };

  onMount(() => {
    setDescribedBy();
    const ro = new ResizeObserver(() => {
      if (isOpen) updatePosition();
    });
    if (anchor) ro.observe(anchor);

    const handleReposition = () => {
      if (isOpen) updatePosition();
    };

    window.addEventListener("resize", handleReposition);
    window.addEventListener("scroll", handleReposition, true);
    return () => {
      ro.disconnect();
      window.removeEventListener("resize", handleReposition);
      window.removeEventListener("scroll", handleReposition, true);
    };
  });

  $effect(() => {
    if (isOpen) updatePosition();
  });
</script>

<span
  class={clsx("relative inline-flex items-center", triggerClass)}
  bind:this={anchor}
  onmouseenter={open}
  onmouseleave={close}
  onfocusin={open}
  role="tooltip"
  onfocusout={close}
>
  {@render trigger?.()}
  {#if isOpen}
    <div
      {id}
      class={baseCls}
      bind:this={tooltipEl}
      role="tooltip"
      aria-hidden={!isOpen}
      style={`position: absolute; left: ${coords.left}px; top: ${coords.top}px; z-index: 60`}
      onmouseenter={() => {
        if (closeTimer) {
          clearTimeout(closeTimer);
          closeTimer = null;
        }
      }}
      onmouseleave={close}
      {...restProps}
    >
      <Layer />
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
      {@render children?.()}
    </div>
  {/if}
</span>
