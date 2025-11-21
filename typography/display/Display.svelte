<script lang="ts">
  import clsx from "clsx";
  import { display } from "./theme";
  import type { DisplayProps } from "./types";

  let { children, class: className, ...restProps }: DisplayProps = $props();

  let displayCls = $derived(display({ class: clsx(className) }));
</script>

<h1 {...restProps} class={displayCls}>
  {@render children()}
</h1>
