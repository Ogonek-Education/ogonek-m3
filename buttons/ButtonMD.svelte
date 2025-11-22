<script lang="ts">
  import type { ButtonMDProps } from "./types";
  import { LoaderCircle } from "@lucide/svelte";
  import ConfirmDelete from "$lib/components/ConfirmDelete.svelte";
  import Icon from "../icon/Icon.svelte";
  import { buttonMD } from "./theme";
  import clsx from "clsx";

  let {
    children,
    iconProps,
    color = "filled",
    size = "md",
    shape = "round",
    type = "default",
    disabled,
    formaction,
    loading,
    class: className,
    ...restProps
  }: ButtonMDProps = $props();

  const { base, icon } = $derived(buttonMD({ color, shape, type, size }));

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
        <LoaderCircle class="animate-spin" />
      {:else}
        <Icon class={icon()} {...iconProps} />
      {/if}
    {:else if loading}
      <LoaderCircle class="animate-spin" />
    {/if}
    {@render children?.()}
  </button>
{/if}
