<script lang="ts">
  import { toggle } from "./theme";
  import clsx from "clsx";
  import type { ToggleProps } from "./types";

  let {
    children,
    size = "default",
    value,
    checked = $bindable(),
    disabled,
    color = "primary",
    class: className,
    classes,
    inputClass,
    spanClass,
    offLabel,
    ...restProps
  }: ToggleProps = $props();

  const styling = $derived(classes ?? { input: inputClass, span: spanClass });

  const { input, label, span } = $derived(
    toggle({ color, checked, size, disabled, off_state_label: !!offLabel }),
  );
</script>

{#if offLabel}
  {@render offLabel()}
{/if}
<input
  type="checkbox"
  bind:checked
  {value}
  {...restProps}
  {disabled}
  class={input({ class: clsx(styling.input) })}
/>
<span class={span({ class: clsx(styling.span) })}></span>
{#if children}
  {@render children()}
{/if}
