<script lang="ts">
  import clsx from "clsx";
  import { checkbox } from "./theme";
  import type { CheckboxProps } from "./types";
  import Layer from "../../utils/Layer.svelte";

  // MUST BE WRAPPED IN A <label>
  let {
    label,
    supportingText,
    indeterminate = false,
    checked = $bindable(false),
    disabled = false,
    error = false,
    align = "start",
    class: className,
    ...restProps
  }: CheckboxProps = $props();

  const state = $derived(
    indeterminate ? "indeterminate" : checked ? "checked" : "unchecked",
  );
  const cls = $derived(checkbox({ state, error, align, disabled }));
  let inputEl: HTMLInputElement | null = $state(null);

  $effect(() => {
    if (inputEl) inputEl.indeterminate = indeterminate;
  });
</script>

<div class={cls.root({ class: clsx(className) })}>
  <input
    type="checkbox"
    bind:checked
    bind:this={inputEl}
    {disabled}
    {...restProps}
    class="peer sr-only"
  />
  <div class={cls.control()}>
    <Layer />
    <div class={cls.box()}>
      <span class={cls.indeterminateIcon()}></span>
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        class={cls.checkIcon()}
      >
        <path
          d="M 4.83 13.41 L 9 17.585 L 19.59 7"
          fill="none"
          stroke="currentColor"
          stroke-width="1.41"
        />
      </svg>
    </div>
  </div>
  {#if label || supportingText}
    <div class="flex flex-col gap-1">
      {#if label}
        <span class={cls.label()}>{label}</span>
      {/if}
      {#if supportingText}
        <span class={cls.supporting()}>{supportingText}</span>
      {/if}
    </div>
  {/if}
</div>
