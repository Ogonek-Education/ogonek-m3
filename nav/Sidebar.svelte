<script lang="ts">
  import type { Snippet } from "svelte";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  let { children }: { children?: Snippet } = $props();
</script>

<div
  class="
    border-primary bg-bg-primary fixed z-50 h-full w-full
    flex-col overflow-visible
    rounded-none border-t-0 border-r-0 md:relative md:flex md:w-50 lg:w-60 xl:w-70 2xl:w-75"
>
  <ul
    class="flex flex-col overflow-visible"
    in:fly={{ y: 20, duration: 400, easing: quintOut }}
  >
    {@render children?.()}
  </ul>
</div>
