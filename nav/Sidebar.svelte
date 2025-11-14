<script lang="ts">
  import type { Snippet } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  let { children }: { children?: Snippet } = $props();
</script>

<div
  class="
    bg-bg-primary border-border-primary hover:border-border-hover fixed z-40
    h-full w-full
    flex-col overflow-visible rounded-none py-2 transition-all md:relative md:flex md:w-50 md:border-l-2 lg:w-60 xl:w-70 2xl:w-75"
>
  <ul
    class="flex flex-col overflow-visible"
    in:fly={{ y: 20, duration: 400, easing: quintOut }}
  >
    {@render children?.()}
  </ul>
</div>
