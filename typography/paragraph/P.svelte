<script lang="ts">
  import clsx from "clsx";
  import { paragraph } from "./theme";
  import type { ParagraphProps } from "./types";

  let {
    children,
    class: className,
    align = "left",
    justify = false,
    italic,
    firstUpper = false,
    whitespace = "normal",
    ...restProps
  }: ParagraphProps = $props();

  let classP = $derived(
    paragraph({
      align,
      justify,
      italic,
      firstUpper,
      whitespace,
      class: clsx(className),
    }),
  );
</script>

<p {...restProps} class={classP}>
  {@render children()}
</p>

<!--
@component
[Go to docs](https://flowbite-svelte.com/)
## Type
[ParagraphProps](https://github.com/themesberg/flowbite-svelte/blob/main/src/lib/types.ts#L2019)
## Props
@prop children
@prop class: className = "text-gray-900 dark:text-white"
@prop height = "normal"
@prop align = "left"
@prop justify = false
@prop italic
@prop firstUpper = false
@prop whitespace = "normal"
@prop size = "base"
@prop space = "normal"
@prop weight = "normal"
@prop ...restProps
-->
