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
  let toolbarDataCy = $derived(restProps["data-cy"] ?? "toolbar-button");
  let forwardedProps = $derived(() => {
    const { ["data-cy"]: _dataCy, ...others } = restProps;
    return others;
  });
</script>

{#if forwardedProps.href === undefined}
  <button
    type="button"
    {...forwardedProps}
    class={buttonCls}
    data-cy={toolbarDataCy}
  >
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </button>
{:else}
  <a {...forwardedProps} class={buttonCls}>
    {#if name}<span class="sr-only">{name}</span>{/if}
    {@render children?.()}
  </a>
{/if}
