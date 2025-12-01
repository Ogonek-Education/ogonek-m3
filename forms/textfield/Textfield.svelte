<script lang="ts">
  import clsx from "clsx";
  import Icon from "../../utils/icon/Icon.svelte";
  import { textfield } from "./theme";
  import type { TextfieldProps } from "./types";

  let {
    value = $bindable(),
    elementRef = $bindable(),
    supportingText,
    leadingIconProps,
    trailingIconProps,
    placeholder = "",
    label,
    id,
    class: className,
    characterLimit,
    disabled = false,
    error = false,
    trailingOnClick,
    ...restProps
  }: TextfieldProps = $props();

  const cls = $derived(textfield({ disabled, error }));
</script>

<div class="relative w-full">
  <div class={cls.base()}>
    {#if leadingIconProps}
      <Icon class={cls.leadingIcon()} {...leadingIconProps} />
    {/if}

    <div class={cls.inputWrapper()}>
      <input
        {id}
        bind:value
        class={cls.input({ class: clsx(className) })}
        {disabled}
        {placeholder}
        {...restProps}
      />

      <label class={cls.label()} for={id}>{label}</label>
    </div>

    {#if trailingIconProps}
      <button type="button" class="z-40" onclick={trailingOnClick}>
        <Icon class={cls.trailingIcon()} {...trailingIconProps} />
      </button>
    {/if}
  </div>

  {#if supportingText}
    <div class={cls.supportingText()}>
      <p>{@render supportingText()}</p>
      {#if characterLimit}
        <p>{value?.length} / {characterLimit}</p>
      {/if}
    </div>
  {/if}
</div>
