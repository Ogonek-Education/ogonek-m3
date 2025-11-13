<script lang="ts">
  const { children } = $props();
</script>

<div
  class="bg-tertiary gap-default border-border-primary md:padding-default flex h-24 w-full items-center border-b-2 md:pr-5 md:pl-6"
>
  {@render children()}
</div>
