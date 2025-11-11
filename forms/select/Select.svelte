<script lang="ts" generics="T">
  import { select as selectCls } from "./theme";
  import clsx from "clsx";
  import type { SelectProps } from "./types";

  let {
    children,
    items,
    value = $bindable(),
    disabled = false,
    size = "md",
    color = "default",
    elementRef = $bindable(),
    placeholder = "Выберите вариант ...",
    class: className,
    ...restProps
  }: SelectProps<T> = $props();

  const { base } = $derived(selectCls({ disabled, size, color }));
</script>

<select
  {disabled}
  {...restProps}
  bind:value
  bind:this={elementRef}
  class={base({ class: clsx(className) })}
>
  {#if placeholder}
    <option disabled selected={value === "" || value === undefined} value=""
      >{placeholder}</option
    >
  {/if}

  {#if items}
    {#each items as item}
      <option value={item.value} disabled={item.disabled}>{item.name}</option>
    {/each}
  {/if}

  {#if children}
    {@render children()}
  {/if}
</select>
