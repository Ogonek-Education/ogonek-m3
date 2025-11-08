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
