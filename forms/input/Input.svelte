<script lang="ts">
  import { getContext } from "svelte";
  import clsx from "clsx";
  import { input } from "./theme";
  import { clampSize } from "./index";
  import type { InputProps, InputValue, SizeType } from "$lib/types";
  import { getTheme } from "../../utils/close-button/theme";
  import { CloseButton, createDismissableContext } from "../../utils";

  let {
    children,
    value = $bindable(),
    elementRef = $bindable(),
    size,
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

  const theme = getTheme("input");

  let background: boolean = getContext("background");

  let group: { size: SizeType } = getContext("group");
  let _size = $derived(size || clampSize(group?.size) || "md");
  const _color = $derived(color === "default" && background ? "tinted" : color);

  const {
    base,
    input: inputCls,
    close,
  } = $derived(input({ size: _size, color: _color }));

  const clearAll = () => {
    if (elementRef) {
      const input = elementRef;
      input.value = "";
      value = "";
    }
  };

  createDismissableContext(clearAll);
</script>

{@render inputContent()}

{#snippet inputContent()}
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
{/snippet}
