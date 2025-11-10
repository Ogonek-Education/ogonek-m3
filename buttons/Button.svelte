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
    color = "primary",
    tag = "button",
    scale = "sm",
    position = "end",
    disabled,
    formaction,
    loading = false,
    withModal,
    Icon,
    tooltipContent,
    class: className,
    ...restProps
  }: ButtonProps = $props();

  let isDisabled = $derived(Boolean(disabled) || loading);
  const _position = $derived(Icon ? "center" : position);
  const _scale = $derived(Icon ? "lg" : scale);
  const { base } = $derived(
    button({
      color,
      size,
      position: _position,
      disabled: isDisabled,
      scale: _scale,
    }),
  );
  let btnCls = $derived(
    base({
      class: clsx(className),
    }),
  );

  const showTooltip = $derived(!!Icon);

  let showModal = $state(false);

  function handleClick(e: any) {
    if (color === "red" && withModal) {
      e.preventDefault();
      showModal = true;
      return;
    } else if (restProps.onclick) {
      restProps.onclick(e);
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
    {...restProps}
    class={btnCls}
    {formaction}
    onclick={(e) => handleClick(e)}
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
  <ConfirmDelete {formaction} bind:showModal />
{/if}
