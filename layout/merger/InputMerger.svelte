<script lang="ts">
  import { fly } from "svelte/transition";

  let { children } = $props();
</script>

<div
  class="border-fat padding-default grid max-h-max shrink"
  in:fly={{ y: 20 }}
>
  {@render children()}
</div>
