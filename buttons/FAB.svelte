<script lang="ts">
  import clsx from "clsx";
  import { fab } from "./theme";
  import type { FABProps } from "./types";
  import { tooltip } from "$lib/utils";

  let {
    children,
    color = "primary",
    disabled,
    formaction,
    size = "regular",
    config = "primary",
    Icon,
    label,
    expanded = false,
    class: className,
    ...restProps
  }: FABProps = $props();

  const {
    base,
    icon,
    label: labelClass,
  } = $derived(fab({ size, config, expanded }));
  let btnCls = $derived(
    base({
      class: clsx(className),
    }),
  );

  const showTooltip = $derived(!expanded);
</script>

{#if restProps.href !== undefined}
  <a
    {...restProps}
    {@attach tooltip({ content: label, condition: showTooltip })}
    class={btnCls}
  >
    <Icon class={icon()} />
    {#if expanded}
      <p class={labelClass()}>
        {label}
      </p>
    {/if}
  </a>
{:else}
  <button
    {@attach tooltip({ content: label, condition: showTooltip })}
    {...restProps}
    class={btnCls}
  >
    <Icon class={icon()} />
    {#if expanded}
      <p class={labelClass()}>
        {label}
      </p>
    {/if}
  </button>
{/if}
