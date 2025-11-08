<script lang="ts">
  import { helper } from "./theme";
  import clsx from "clsx";
  import type { HelperProps } from "./types";

  let {
    children,
    class: className,
    color = "gray",
    ...restProps
  }: HelperProps = $props();

  const base = $derived(helper({ color, class: clsx(className) }));
</script>

<p {...restProps} class={base}>
  {@render children?.()}
</p>
