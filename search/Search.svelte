<script lang="ts">
  import { search } from "./theme";
  import clsx from "clsx";
  import type { SearchProps } from "./types";
  import Icon from "../icon/Icon.svelte";

  let {
    children,
    placeholder = "Поиск",
    value = $bindable(),
    elementRef = $bindable(),
    trailingIconProps,
    leadingIconProps = { name: "search" },
    class: className,
    ...restProps
  }: SearchProps = $props();

  const { base, leadingIcon, trailingIcon, input } = $derived(search());
</script>

<label for="search" class={base()}>
  {#if leadingIconProps}
    <Icon {...leadingIconProps} class={leadingIcon()} />
  {/if}
  <input
    id="search"
    {...restProps}
    {placeholder}
    bind:this={elementRef}
    type="text"
    class={input()}
  />

  {#if trailingIconProps}
    <Icon {...trailingIconProps} class={trailingIcon()} />
  {/if}
</label>
