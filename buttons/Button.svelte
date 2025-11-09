<script lang="ts">
  import clsx from "clsx";
  import { button } from "./theme";
  import type { ButtonProps } from "./types";
  import { LoaderCircle } from "@lucide/svelte";

  let {
    children,
    size = "md",
    color,
    tag = "button",
    group = false,
    position = "end",
    disabled,
    loading = false,
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
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    {@render children?.()}
  </a>
{:else if tag === "button"}
  <button type="button" {...restProps} class={btnCls} disabled={isDisabled}>
    {@render children?.()}
    {#if loading}
      <LoaderCircle class="animate-spin" />
    {/if}
  </button>
{:else}
  <svelte:element this={tag} {...restProps} class={btnCls}>
    {@render children?.()}
  </svelte:element>
{/if}
