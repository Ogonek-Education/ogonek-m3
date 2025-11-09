<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "./types";

  let {
    children,
    divClass,
    innerDivClass,
    class: className,
    classes,
    divProps = {},
    hrProps = {},
  }: HrProps = $props();

  const styling = $derived(
    classes ?? {
      div: divClass,
      content: innerDivClass,
    },
  );

  let { base, div, content } = $derived(hr({ withChildren: !!children }));
</script>

{#if children}
  <div {...divProps} class={div({ class: clsx(div, styling.div) })}>
    <hr {...hrProps} class={base({ class: clsx(base, className) })} />
    <div class={content({ class: clsx(content, styling.content) })}>
      {@render children()}
    </div>
  </div>
{:else}
  <hr {...hrProps} class={base({ class: clsx(base, className) })} />
{/if}
