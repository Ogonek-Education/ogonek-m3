<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "./types";

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
</script>

{#if children && orientation === "horizontal"}
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
