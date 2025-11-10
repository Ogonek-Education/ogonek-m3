<script lang="ts">
  import clsx from "clsx";
  import { stack } from "./theme";
  import type { StackProps } from "./types";

  let {
    children,
    type = "vstack",
    align = "end",
    gap = "md",
    justify = "center",
    size = "h",
    class: className,
  }: StackProps = $props();

  const styling = $derived(stack({ align, gap, justify, type, size }));
</script>

<div class={clsx(styling, className)}>
  {@render children()}
</div>
