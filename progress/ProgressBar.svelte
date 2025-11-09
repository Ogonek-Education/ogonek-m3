<script lang="ts">
  const { progress } = $props();
</script>

<div
  class="bg-accent dark:bg-accent h-full duration-150"
  style="width: {progress}%"
></div>
