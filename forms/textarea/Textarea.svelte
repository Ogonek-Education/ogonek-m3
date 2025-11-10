<script lang="ts">
  import { createDismissableContext } from "../../utils";
  import CloseButton from "../../utils/close-button/CloseButton.svelte";
  import { textarea } from "./theme";
  import clsx from "clsx";
  import type { TextareaProps } from "./types";

  let {
    value = $bindable(),
    elementRef = $bindable(),
    divClass,
    disabled,
    class: className,
    classes,
    clearable,
    color = "default",
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    textareaClass,
    ...restProps
  }: TextareaProps = $props();

  const styling = $derived(
    classes ?? {
      div: divClass,
      textarea: textareaClass,
      close: clearableClass,
      svg: clearableSvgClass,
    },
  );

  const { div, base, close } = $derived(textarea({ color }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={div({ class: clsx(styling.div) })}>
  <textarea
    bind:value
    bind:this={elementRef}
    {disabled}
    {...restProps}
    class={base({ class: clsx(className) })}
  ></textarea>

  {#if value !== undefined && value !== "" && clearable}
    <CloseButton
      class={close({ class: clsx(close, styling.close) })}
      color={clearableColor}
      aria-label="Clear search value"
    />
  {/if}
</div>
