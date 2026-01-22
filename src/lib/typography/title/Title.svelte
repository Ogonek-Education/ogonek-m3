<script lang="ts">
  import clsx from "clsx";
  import { title } from "./theme.js";
  import type { TitleProps } from "./types.js";

  let { children, class: className, ...restProps }: TitleProps = $props();

  let titleCls = $derived(title({ class: clsx(className) }));
</script>

<h3 {...restProps} class={titleCls}>
  {@render children()}
</h3>
