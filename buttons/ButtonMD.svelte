<script lang="ts">
  import type { ButtonMDProps } from "./types";
  import Icon from "../icon/Icon.svelte";
  import { buttonMD } from "./theme";
  import clsx from "clsx";
  import LoadingIndicator from "../icon/LoadingIndicator.svelte";

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

  const { base, icon } = $derived(buttonMD({ variant, shape, size }));

  const btnCls = $derived(clsx(base(), className));
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    {#if iconProps}
      <Icon class={icon()} {...iconProps} />
    {/if}

    {@render children?.()}
  </a>
{:else}
  <button {disabled} {...restProps} class={btnCls} {formaction}>
    {#if iconProps}
      {#if loading}
        <LoadingIndicator />
      {:else}
        <Icon class={icon()} {...iconProps} />
      {/if}
    {:else if loading}
      <LoadingIndicator />
    {/if}
    {@render children?.()}
  </button>
{/if}
