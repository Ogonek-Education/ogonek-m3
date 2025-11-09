<script lang="ts">
  const { children } = $props();
</script>

<div
  class="bg-translucent gap-default flex h-24 items-center justify-between border-b-2 border-stone-300 pr-5 pl-6 dark:border-stone-800"
>
  {@render children()}
</div>
