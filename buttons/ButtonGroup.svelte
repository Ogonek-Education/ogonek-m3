<script lang="ts">
  import { buttonGroup } from "./theme";
  import clsx from "clsx";
  import type { ButtonGroupProps } from "./types";

  let {
    children,
    size = "md",
    disabled,
    class: className,
    ...restProps
  }: ButtonGroupProps = $props();

  let groupClass = $derived(buttonGroup({ size, class: clsx(className) }));
</script>

<div {...restProps} class={groupClass} role="group">
  {@render children()}
</div>
