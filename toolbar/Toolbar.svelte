<script lang="ts">
  import clsx from "clsx";
  import { toolbar } from "./theme";
  import type { ToolbarProps } from "./types";

  let {
    children,
    end,
    color,
    embedded,
    class: className,
    classes,
    ...restProps
  }: ToolbarProps = $props();

  const context = $state({ separators: false });

  let frameColor = $derived(embedded ? "default" : color);

  let { base, content } = $derived(
    toolbar({
      color: frameColor,
      embedded,
      separators: context.separators,
    }),
  );

  // let separatorsClass: string = twMerge($separators && 'sm:divide-x rtl:divide-x-reverse');

  // let divClass: string = twMerge('flex justify-between items-center', !embedded && 'py-2 px-3', className);
</script>

<div {...restProps} class={base({ class: clsx(className) })}>
  <div class={content({ class: clsx(classes?.content) })}>
    {@render children?.()}
  </div>
  {#if end}
    {@render end()}
  {/if}
</div>
