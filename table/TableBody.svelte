<script lang="ts">
  import { fly } from "svelte/transition";

  const { children } = $props();
</script>

<div
  class="scrollbar-none padding-default flex-1 overflow-y-scroll"
  in:fly|global={{ y: 20 }}
>
  {@render children()}
</div>
