<script lang="ts">
  import { Plus } from "@lucide/svelte";
  const { addCard } = $props();
</script>

<button
  data-cy="new-card"
  type="button"
  class="group focus:ring-accent border-primary flex min-h-20 w-full items-center justify-center border-dashed focus:outline-none"
  onclick={addCard}
>
  <Plus class="group-hover:text-accent size-12" />
</button>
