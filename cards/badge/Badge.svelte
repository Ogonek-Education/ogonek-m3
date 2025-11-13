<script lang="ts">
  import clsx from "clsx";
  import { badge } from "./theme";
  import type { BadgeProps } from "./types";
  import { P } from "../../typography";

  const { children, color = "blue", class: className }: BadgeProps = $props();

  const styling = $derived(badge({ color }));
</script>

<div class={clsx(styling, className)}>
  <P>
    {@render children()}
  </P>
</div>
