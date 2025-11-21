<script lang="ts">
  import clsx from "clsx";
  import { secondary } from "./theme";
  import type { SecondaryProps } from "./types";

  let { children, class: className, ...restProps }: SecondaryProps = $props();
</script>

<small {...restProps} class={secondary({ class: clsx(className) })}>
  {@render children()}
</small>
