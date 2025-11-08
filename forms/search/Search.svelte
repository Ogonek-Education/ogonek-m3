<script lang="ts">
  import { search } from "./theme";
  import clsx from "clsx";
  import type { SearchProps } from "./types";
  import CloseButton from "../../utils/close-button/CloseButton.svelte";

  let {
    children,
    inputClass,
    placeholder = "Search",
    value = $bindable(),
    elementRef = $bindable(),
    clearable = false,
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    class: className,
    classes,
    ...restProps
  }: SearchProps = $props();
  const styling = $derived(
    classes ?? {
      input: inputClass,
      svg: clearableSvgClass,
      close: clearableClass,
    },
  );
  const {
    base,
    content,
    icon,
    close,
    input: inputCls,
    left,
  } = $derived(search());
</script>

<div class={base({ class: clsx(className) })}>
  <div class={left({ class: clsx(classes?.left) })}>
    <svg
      class={icon({ class: clsx(classes?.icon) })}
      aria-hidden="true"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 20 20"
    >
      <path
        stroke="currentColor"
        stroke-linecap="round"
        stroke-linejoin="round"
        stroke-width="2"
        d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
      />
    </svg>
  </div>
  <input
    type="search"
    bind:value
    bind:this={elementRef}
    class={inputCls({ class: clsx(styling.input) })}
    {placeholder}
    required
    {...restProps}
  />
  {#if children}
    <div class={content({ class: clsx(classes?.content) })}>
      {@render children()}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton
      class={close({ class: clsx(styling.close) })}
      color={clearableColor}
      aria-label="Clear search value"
      svgClass={clsx(styling.svg)}
    />
  {/if}
</div>
