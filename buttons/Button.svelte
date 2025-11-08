<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import { button } from "./theme";
  import type { ButtonProps } from "./types";

  const ctxDisabled: boolean | undefined = getContext("disabled");

  let {
    children,
    pill,
    size = "md",
    color,
    tag = "button",
    disabled,
    loading = false,
    class: className,
    ...restProps
  }: ButtonProps = $props();

  let isDisabled = $derived(
    Boolean(ctxDisabled) || Boolean(disabled) || loading,
  );

  const { base } = $derived(
    button({
      color,
      size,
      disabled: isDisabled,
      pill,
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
      <svg
        class="ml-2 h-4 w-4 animate-spin text-white"
        fill="none"
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        aria-hidden="true"
      >
        <circle
          class="opacity-25"
          cx="12"
          cy="12"
          r="10"
          stroke="currentColor"
          stroke-width="4"
        />
        <path
          class="opacity-75"
          fill="currentColor"
          d="M4 12a8 8 0 018-8v4a4 4 0 00-4 4H4z"
        />
      </svg>
    {/if}
  </button>
{:else}
  <svelte:element this={tag} {...restProps} class={btnCls}>
    {@render children?.()}
  </svelte:element>
{/if}
