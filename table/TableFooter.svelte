<script lang="ts">
  const { children } = $props();
</script>

<div
  class="bg-primary gap-default border-border-primary min-h-16 shrink rounded-b-2xl border-t-2 py-2 md:items-end md:p-5"
>
  {@render children()}
</div>
