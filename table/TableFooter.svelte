<script lang="ts">
  const { children } = $props();
</script>

<div
  class="bg-solid gap-default border-border-primary min-h-16 shrink items-end rounded-b-2xl border-t-2 p-5"
>
  {@render children()}
</div>
