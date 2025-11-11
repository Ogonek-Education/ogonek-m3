<script lang="ts">
  const { children } = $props();
</script>

<div
  class="bg-tertiary gap-default border-border-primary flex h-24 w-full items-center border-b-2 pr-5 pl-6"
>
  {@render children()}
</div>
