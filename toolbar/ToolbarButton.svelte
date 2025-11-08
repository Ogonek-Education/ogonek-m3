<script lang="ts">
  import { getContext } from "svelte";
  import { toolbarButton } from "./theme";
  import clsx from "clsx";
  import type { ToolbarButtonProps } from "./types";

  const background = getContext("background");
  let {
    children,
    color,
    name,
    "aria-label": ariaLabel,
    size,
    class: className,
    ...restProps
  }: ToolbarButtonProps = $props();

  const buttonCls = $derived(
    toolbarButton({
      color,
      size,
      background: !!background,
      class: clsx(className),
    }),
  );
</script>

{#if restProps.href === undefined}
  <button
    type="button"
    {...restProps}
    class={buttonCls}
    aria-label={ariaLabel ?? name}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </button>
{:else}
  <a {...restProps} class={buttonCls} aria-label={ariaLabel ?? name}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </a>
{/if}
