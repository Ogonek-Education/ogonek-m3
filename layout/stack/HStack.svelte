<script lang="ts">
  import clsx from "clsx";
  import { stack } from "./theme";
  import type { StackProps } from "./types";

  let {
    children,
    type = "hstack",
    align = "start",
    gap = "md",
    size = "w",
    class: className,
  }: StackProps = $props();

  const styling = $derived(stack({ align, gap, type, size }));
</script>

<div class={clsx(styling, className)}>
  {@render children()}
</div>
