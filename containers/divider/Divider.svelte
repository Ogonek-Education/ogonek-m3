<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "./types";

  let { class: className, variant = "full", ...restProps }: HrProps = $props();

  let styling = $derived(hr({ variant }));
</script>

<div {...restProps} class={clsx(styling, className)}></div>
