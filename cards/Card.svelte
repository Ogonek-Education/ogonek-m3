<script lang="ts">
  import { fly } from "svelte/transition";
  import type { CardProps } from "./types";
  import { card } from "./theme";
  import clsx from "clsx";

  let {
    children,
    type = "elevated",
    class: className,
    ...restProps
  }: CardProps = $props();

  const { base, icon } = $derived(card({ type }));
</script>

<a in:fly={{ y: 20 }} class={base({ class: clsx(className) })} {...restProps}>
  {@render children?.()}
</a>
