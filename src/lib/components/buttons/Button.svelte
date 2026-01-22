<script lang="ts">
  import type { ButtonMDProps } from "./types.js";
  import Icon from "../utils/icon/Icon.svelte";
  import { button } from "./theme.js";
  import clsx from "clsx";
  import LoadingIndicator from "../utils/icon/LoadingIndicator.svelte";
  import Layer from "../utils/Layer.svelte";

  let {
    children,
    iconProps,
    variant = "filled",
    color = "default",
    size = "md",
    shape = "round",
    disabled,
    selected,
    formaction,
    loading,
    class: className,
    ...restProps
  }: ButtonMDProps = $props();

  const { base, icon } = $derived(
    button({ variant, color, shape, size, selected }),
  );

  const btnCls = $derived(base({ class: clsx(className) }));
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
        <LoadingIndicator container={variant === "filled"} class={icon()} />
      {:else}
        <Icon class={icon()} {...iconProps} />
        {@render children?.()}
      {/if}
    {:else if loading}
      <LoadingIndicator container={variant === "filled"} />
    {:else}
      {@render children?.()}
    {/if}
    <Layer />
  </button>
{/if}
