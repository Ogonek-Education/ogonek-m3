<script lang="ts">
  import clsx from "clsx";
  import {
    fabMenuItem,
    Icon,
    LoadingIndicator,
    type FABMenuItemProps,
  } from "$lib/components";

  let {
    class: className,
    color = "secondary",
    loading,
    children,
    iconProps,
    formaction,
    ...restProps
  }: FABMenuItemProps = $props();

  const { base, icon } = $derived(fabMenuItem({ color }));

  const btnCls = $derived(base({ class: clsx(className) }));
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    {#if iconProps}
      <Icon class={icon()} {...iconProps} />
    {/if}

    {@render children?.()}
  </a>
{:else}
  <button {...restProps} class={btnCls} {formaction}>
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
