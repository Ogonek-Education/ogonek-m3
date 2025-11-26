<script lang="ts">
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
    textareaClass,
    ...restProps
  }: TextareaProps = $props();

  const styling = $derived(
    classes ?? {
      div: divClass,
      textarea: textareaClass,
    },
  );

  const { div, base } = $derived(textarea());
</script>

<div class={div({ class: clsx(styling.div) })}>
  <textarea
    bind:value
    bind:this={elementRef}
    {disabled}
    {...restProps}
    class={base({ class: clsx(className) })}
  ></textarea>
</div>
