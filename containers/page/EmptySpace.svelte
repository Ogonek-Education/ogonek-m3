<script lang="ts">
  let { children, ...rest } = $props();
</script>

<div
  class="gap-default border-primary flex min-h-40 w-full flex-col items-center justify-center border-3 border-dotted p-2.5 text-center"
  {...rest}
>
  {@render children?.()}
</div>
