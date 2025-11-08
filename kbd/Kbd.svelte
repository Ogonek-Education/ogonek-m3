<script lang="ts">
  import { kbd } from "./theme";
  import clsx from "clsx";
  import type { KbdProps } from "./types";

  let { children, class: className, ...restProps }: KbdProps = $props();

  const kbdCls = kbd({ class: clsx(className) });
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>
