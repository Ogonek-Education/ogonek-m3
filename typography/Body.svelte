<script lang="ts">
  let { children, styling = "" } = $props();
</script>

<p class="text-base leading-relaxed font-medium {styling}">
  {@render children?.()}
</p>
