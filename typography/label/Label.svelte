<script lang="ts">
  import clsx from "clsx";
  import { labelt } from "./theme";
  import type { LabelTProps } from "./types";

  let {
    children,
    type = "default",
    class: className,
    ...restProps
  }: LabelTProps = $props();
</script>

<p {...restProps} class={labelt({ class: clsx(className) })}>
  {@render children()}
</p>
