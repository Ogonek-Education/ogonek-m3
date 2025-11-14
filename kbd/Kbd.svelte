<script lang="ts">
  import { kbd } from "./theme";
  import clsx from "clsx";
  import type { KbdProps } from "./types";

  let {
    children,
    position = "absolute",
    class: className,
    ...restProps
  }: KbdProps = $props();

  const kbdCls = $derived(kbd({ class: clsx(className), position }));
</script>

<kbd {...restProps} class={kbdCls}>
  {@render children()}
</kbd>
