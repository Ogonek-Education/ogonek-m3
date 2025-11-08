<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import { input } from "./theme";
  import { clampSize } from "./index";
  import { CloseButton, createDismissableContext } from "../../utils";
  import type { InputProps, InputValue } from "./types";

  let {
    children,
    value = $bindable(),
    elementRef = $bindable(),
    color = "default",
    class: className,
    onSelect,
    oninput,
    onfocus,
    clearable = false,
    onblur,
    onkeydown,
    ...restProps
  }: InputProps<InputValue> = $props();

  const { base, input: inputCls, close } = $derived(input({ color }));

  const clearAll = () => {
    if (elementRef) {
      const input = elementRef;
      input.value = "";
      value = "";
    }
  };

  createDismissableContext(clearAll);
</script>

{#if children}
  {@render children({ ...restProps, class: inputCls() })}
{:else}
  <input
    {...restProps}
    bind:value
    bind:this={elementRef}
    {oninput}
    {onfocus}
    {onblur}
    {onkeydown}
    class={[base(), inputCls({ class: clsx(className) })]}
  />
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton
      class={close({ class: clsx() })}
      aria-label="Clear search value"
    />
  {/if}
{/if}
