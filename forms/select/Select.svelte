<script lang="ts" generics="T">
  import { select as selectCls } from "./theme";
  import clsx from "clsx";
  import type { SelectProps } from "./types";

  let {
    children,
    items,
    value = $bindable(),
    disabled = false,
    selectClass,
    size = "md",
    color = "default",
    elementRef = $bindable(),
    placeholder = "Choose option ...",
    classes,
    class: className,
    ...restProps
  }: SelectProps<T> = $props();
  const styling = $derived(
    classes ?? {
      select: selectClass,
    },
  );
  const { base, select } = $derived(selectCls({ disabled, size, color }));
</script>

<div class={base({ class: clsx(className) })}>
  <select
    {disabled}
    {...restProps}
    bind:value
    bind:this={elementRef}
    class={select({ class: clsx(styling.select) })}
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
</div>
