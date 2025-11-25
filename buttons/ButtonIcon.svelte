<script lang="ts">
  import type { ButtonIconProps } from "./types";
  import Icon from "../icon/Icon.svelte";
  import { buttonIcon } from "./theme";
  import clsx from "clsx";
  import LoadingIndicator from "../icon/LoadingIndicator.svelte";

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
  </a>
{:else}
  <button {disabled} {...restProps} class={btnCls} {formaction}>
    {#if loading}
      <LoadingIndicator />
    {:else}
      <Icon class={icon()} {...iconProps} />
    {/if}
  </button>
{/if}
