<script lang="ts">
  const { progress }: { progress: number } = $props();
</script>

<div class="bg-bg-secondary h-5 w-full overflow-hidden rounded-2xl">
  <div
    class="bg-accent dark:bg-accent h-full duration-300"
    style="width: {progress}%"
  ></div>
</div>
