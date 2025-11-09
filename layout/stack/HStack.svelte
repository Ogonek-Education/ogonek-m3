<script lang="ts">
  let { children, styling = "", override = "gap-default", ...rest } = $props();
</script>

<div class="flex w-full flex-col {override} {styling}" {...rest}>
  {@render children()}
</div>
