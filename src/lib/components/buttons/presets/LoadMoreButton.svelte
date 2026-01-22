<script lang="ts">
  import clsx from "clsx";
  import Button from "../Button.svelte";
  import Icon from "../../utils/icon/Icon.svelte";
  import type { ButtonMDProps } from "../types.js";

  const {
    label = "Загрузить еще",
    iconName = "cruelty_free",
    wrapperClass,
    children,
    ...restProps
  }: {
    label?: string;
    iconName?: string;
    wrapperClass?: string;
  } & ButtonMDProps = $props();
</script>

<div class={clsx("relative inline-flex justify-center pt-3", wrapperClass)}>
  <Icon
    name={iconName}
    class="text-md-sys-color-on-surface-variant pointer-events-none absolute -top-4 left-1/2 size-7 -translate-x-1/2"
  />
  <Button variant="tonal" {...restProps}>
    {#if children}
      {@render children()}
    {:else}
      {label}
    {/if}
  </Button>
</div>
