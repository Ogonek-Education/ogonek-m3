<script lang="ts">
  let { children, styling = "" } = $props();
</script>

<kbd
  class="bg-solid padding-default hidden max-h-max min-w-max items-center rounded-2xl border-2 font-bold md:flex"
>
  {@render children?.()}
</kbd>
