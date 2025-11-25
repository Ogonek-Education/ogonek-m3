<script lang="ts">
  import Icon from "../icon/Icon.svelte";
  import { textfield } from "./theme";
  import type { TextfieldProps } from "./types";

  let {
    value = $bindable(),
    elementRef,
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
        class={cls.input()}
        {disabled}
        {placeholder}
        {...restProps}
      />

      <label class={cls.label()} for={id}>{label}</label>
    </div>

    {#if trailingIconProps}
      <Icon class={cls.trailingIcon()} {...trailingIconProps} />
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
