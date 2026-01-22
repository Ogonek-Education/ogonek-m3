<script lang="ts">
  import clsx from "clsx";
  import { headline } from "./theme.js";
  import type { HeadlineProps } from "./types.js";

  let { children, class: className, ...restProps }: HeadlineProps = $props();

  let headlineCls = $derived(headline({ class: clsx(className) }));
</script>

<h2 {...restProps} class={headlineCls}>
  {@render children()}
</h2>
