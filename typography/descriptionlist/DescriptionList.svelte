<script lang="ts">
  import clsx from "clsx";
  import { descriptionList } from "./theme";
  import type { DescriptionListProps } from "./types";

  let {
    children,
    tag,
    class: className,
    ...restProps
  }: DescriptionListProps = $props();

  let descCls = $derived(
    descriptionList({
      tag,
      class: clsx(className),
    }),
  );
</script>

<svelte:element this={tag} {...restProps} class={descCls}>
  {@render children()}
</svelte:element>
