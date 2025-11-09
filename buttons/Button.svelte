<script lang="ts">
  import clsx from "clsx";
  import { button } from "./theme";
  import type { ButtonProps } from "./types";
  import { LoaderCircle } from "@lucide/svelte";
  import { tooltip } from "$lib/utils";
  import ConfirmDelete from "$lib/components/ConfirmDelete.svelte";

  let {
    children,
    size = "md",
    color,
    tag = "button",
    group = false,
    position = "end",
    disabled,
    loading = false,
    withModal,
    Icon,
    tooltipContent,
    class: className,
    ...restProps
  }: ButtonProps = $props();

  let isDisabled = $derived(Boolean(disabled) || loading);

  const { base } = $derived(
    button({
      color,
      size,
      position,
      disabled: isDisabled,
    }),
  );
  let btnCls = $derived(
    base({
      class: clsx(className),
    }),
  );

  const showTooltip = $derived(!!Icon);
  let showModal = $state(false);

  function handleClick(e: Event) {
    if (color === "red" && withModal) {
      e.preventDefault();
      showModal = true;
    } else {
      restProps.onclick;
    }
  }
</script>

{#if restProps.href !== undefined}
  <a
    {...restProps}
    {@attach tooltip({ content: tooltipContent, condition: showTooltip })}
    class={btnCls}
  >
    {#if Icon}
      <Icon />
    {:else}
      {@render children?.()}
    {/if}
  </a>
{:else if tag === "button"}
  <button
    {@attach tooltip({ content: tooltipContent, condition: showTooltip })}
    type="button"
    {...restProps}
    class={btnCls}
    onclick={handleClick}
    disabled={isDisabled}
  >
    {#if Icon}
      {#if loading}
        <LoaderCircle class="animate-spin" />
      {:else}
        <Icon />
      {/if}
    {:else}
      {@render children?.()}
      {#if loading}
        <LoaderCircle class="animate-spin" />
      {/if}
    {/if}
  </button>
{:else}
  <svelte:element
    this={tag}
    {@attach tooltip({ content: tooltipContent, condition: showTooltip })}
    {...restProps}
    class={btnCls}
  >
    {#if Icon}
      <Icon />
    {:else}
      {@render children?.()}
    {/if}
  </svelte:element>
{/if}

{#if showModal}
  <ConfirmDelete bind:showModal />
{/if}
