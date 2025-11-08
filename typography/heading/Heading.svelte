<script lang="ts">
  import clsx from "clsx";
  import { heading } from "./theme";
  import type { HeadingProps } from "$lib/types";

  let {
    children,
    tag = "h1",
    class: className,
    ...restProps
  }: HeadingProps = $props();

  let headingCls = $derived(heading({ tag, class: clsx(className) }));
</script>

<svelte:element this={tag} {...restProps} class={headingCls}>
  {@render children()}
</svelte:element>
