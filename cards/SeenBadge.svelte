<script lang="ts">
  let { seen = true }: { seen?: boolean | null } = $props();
</script>

{#if !seen}
  <block
    class="absolute top-1 right-1 flex aspect-square size-4 rounded-full bg-red-500"
  >
  </block>
{/if}
