<script lang="ts">
  const { children } = $props();
</script>

<div
  class="bg-solid gap-default min-h-16 shrink items-end rounded-b-2xl border-t-2 border-stone-300 p-5 dark:border-stone-800"
>
  {@render children()}
</div>
