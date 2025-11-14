<script lang="ts">
  import clsx from "clsx";
  import { stack } from "./theme";
  import type { StackProps } from "./types";

  let { children, type = "zstaack", class: className }: StackProps = $props();

  const styling = $derived(stack({ type }));
</script>

<div class={clsx(styling, className)}>
  {@render children()}
</div>
