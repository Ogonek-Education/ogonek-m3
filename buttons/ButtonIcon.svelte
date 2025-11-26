<script lang="ts">
  import type { ButtonIconProps } from "./types";
  import Icon from "../utils/icon/Icon.svelte";
  import { buttonIcon } from "./theme";
  import clsx from "clsx";
  import LoadingIndicator from "../utils/icon/LoadingIndicator.svelte";
  import Layer from "../utils/Layer.svelte";

  let {
    children,
    iconProps,
    variant = "text",
    size = "md",
    shape = "round",
    variation = "default",
    disabled,
    formaction,
    tooltipContent,
    onclick,
    loading,
    width = "default",
    class: className,
    ...restProps
  }: ButtonIconProps = $props();

  const { base, icon } = $derived(
    buttonIcon({ variant, shape, variation, size, width }),
  );

  const btnCls = $derived(clsx(base(), className));
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    <Icon class={icon()} {...iconProps} />
    <Layer />
  </a>
{:else}
  <button {disabled} {onclick} {...restProps} class={btnCls} {formaction}>
    {#if loading}
      <LoadingIndicator />
    {:else}
      <Icon class={icon()} {...iconProps} />
      <Layer />
    {/if}
  </button>
{/if}
