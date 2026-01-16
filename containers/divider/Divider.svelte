<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "./types";
  import { linear } from "../../progress/_wavy";

  let {
    class: className,
    children,
    variant = "full",
    orientation = "horizontal",
    ...restProps
  }: HrProps = $props();

  let styling = $derived(hr({ variant, orientation }));
  let lineClass = $derived(
    clsx(
      "bg-md-sys-color-outline-variant transition-colors",
      orientation === "horizontal" ? "h-[1px] w-full" : "w-[1px] h-full",
    ),
  );
  let insetClass = $derived(variant === "inset" ? "mr-2 ml-4" : "");

  let host = $state<HTMLDivElement | null>(null);
  let width = $state(0);
  let waveHeight = 12;
  let waveThickness = 1;
  let waveAmp = $derived((waveHeight - waveThickness) / 2);
  let waveCenter = $derived(waveHeight / 2);
  let left = $derived(waveThickness * 0.5);
  let right = $derived(Math.max(left, width - waveThickness * 0.5));
  let wavePath = $derived(
    width > 0 ? linear(waveAmp, waveCenter, left, right, 0) : "",
  );

  $effect(() => {
    if (variant !== "wavy" || !host || typeof window === "undefined") return;
    const observer = new ResizeObserver((entries) => {
      const entry = entries[0];
      width = Math.max(0, entry?.contentRect.width ?? 0);
    });
    observer.observe(host);
    return () => {
      observer.disconnect();
    };
  });
</script>

{#if variant === "wavy"}
  <div
    {...restProps}
    bind:this={host}
    class={clsx("w-full", insetClass, className)}
  >
    <svg
      viewBox={`0 0 ${Math.max(width, 1)} ${waveHeight}`}
      class="block w-full"
      style={`height: ${waveHeight}px`}
      role="presentation"
      aria-hidden="true"
    >
      <path
        fill="none"
        stroke="var(--color-md-sys-color-outline-variant)"
        stroke-width={waveThickness}
        stroke-linecap="round"
        d={wavePath}
      />
    </svg>
  </div>
{:else if children && orientation === "horizontal"}
  <div
    {...restProps}
    class={clsx("flex h-full w-full items-center gap-3", insetClass, className)}
  >
    <div class={lineClass}></div>
    <span
      class="md-sys-typescale-label-small text-md-sys-color-on-surface-variant whitespace-nowrap"
    >
      {@render children?.()}
    </span>
    <div class={lineClass}></div>
  </div>
{:else}
  <div {...restProps} class={clsx(styling, className)}></div>
{/if}
