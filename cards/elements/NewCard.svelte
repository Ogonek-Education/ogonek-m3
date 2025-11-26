<script lang="ts">
  const { addCard } = $props();
</script>

<button
  data-cy="new-card"
  type="button"
  class="group focus:ring-accent border-primary flex min-h-20 w-full items-center justify-center border-dashed focus:outline-none"
  onclick={addCard}
>
  plus icon
</button>
