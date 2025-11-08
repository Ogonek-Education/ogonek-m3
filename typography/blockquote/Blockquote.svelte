<script lang="ts">
  import clsx from "clsx";
  import { blockquote } from "./theme";
  import type { BlockquoteProps } from "./types";

  let {
    children,
    class: className,
    border,
    bg,
    ...restProps
  }: BlockquoteProps = $props();

  let blockquoteCls = $derived(
    blockquote({
      border,
      bg,
      class: clsx(className),
    }),
  );
</script>

<blockquote {...restProps} class={blockquoteCls}>
  {@render children()}
</blockquote>
