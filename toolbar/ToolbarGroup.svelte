<script lang="ts">
  import clsx from "clsx";
  import { getContext } from "svelte";
  import { toolbarGroup } from "./theme";
  import type { ToolbarGroupProps } from "./types";

  let {
    children,
    spacing,
    padding,
    position = "middle",
    class: className,
    ...restProps
  }: ToolbarGroupProps = $props();

  const groupCls = $derived(
    toolbarGroup({ spacing, padding, position, class: clsx(className) }),
  );
</script>

<div {...restProps} class={groupCls}>
  {@render children?.()}
</div>
