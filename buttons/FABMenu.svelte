<script lang="ts">
  import clsx from "clsx";
  import { fabMenu } from "./theme";
  import type { FABMenuProps } from "./types";

  let {
    children,
    class: className,
    position = "top",
    ...restProps
  }: FABMenuProps = $props();

  const { base } = $derived(fabMenu({ position }));
</script>

<ul
  {...restProps}
  class={base({
    class: clsx(className),
  })}
>
  {@render children()}
</ul>
