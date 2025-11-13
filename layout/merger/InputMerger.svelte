<script lang="ts">
  import clsx from "clsx";
  import { fly } from "svelte/transition";

  let { children, class: className = "" } = $props();
</script>

<div
  class={clsx(
    className,
    "border-primary padding-default grid max-h-max w-full shrink rounded-none border-x-0 md:rounded-2xl md:border-x-2 md:px-2.5",
  )}
  in:fly={{ y: 20 }}
>
  {@render children()}
</div>
