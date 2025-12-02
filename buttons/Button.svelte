<script lang="ts">
  import type { ButtonMDProps } from "./types";
  import Icon from "../utils/icon/Icon.svelte";
  import { button } from "./theme";
  import clsx from "clsx";
  import LoadingIndicator from "../utils/icon/LoadingIndicator.svelte";
  import Layer from "../utils/Layer.svelte";

  let {
    children,
    iconProps,
    variant = "filled",
    size = "md",
    shape = "round",
    disabled,
    formaction,
    loading,
    class: className,
    ...restProps
  }: ButtonMDProps = $props();

  const { base, icon } = $derived(button({ variant, shape, size }));

  const btnCls = $derived(clsx(base(), className));
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    {#if iconProps}
      <Icon class={icon()} {...iconProps} />
    {/if}
    <Layer />

    {@render children?.()}
  </a>
{:else}
  <button {disabled} {...restProps} class={btnCls} {formaction}>
    {#if iconProps}
      {#if loading}
        <LoadingIndicator class={icon()} />
      {:else}
        <Icon class={icon()} {...iconProps} />
      {/if}
    {:else if loading}
      <LoadingIndicator />
    {/if}
    {@render children?.()}
    <Layer />
  </button>
{/if}
