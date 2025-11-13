<script lang="ts">
  import clsx from "clsx";
  import { stack } from "./theme";
  import type { StackProps } from "./types";

  let {
    children,
    align = "center",
    gap = "md",
    type = "zstaack",
    class: className,
  }: StackProps = $props();

  const styling = $derived(stack({ align, gap, type }));
</script>

<div class={clsx(styling, className)}>
  {@render children()}
</div>
