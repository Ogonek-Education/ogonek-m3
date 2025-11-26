<script lang="ts">
  import clsx from "clsx";
  import { hr } from "./theme";
  import type { HrProps } from "./types";

  let { class: className, ...restProps }: HrProps = $props();

  let styling = $derived(hr());
</script>

<hr {...restProps} class={clsx(styling, className)} />
