<script lang="ts">
  import type { Card } from "$lib/types";
  import { Textfield, Textarea } from "../../forms";

  let {
    index,
    card,
    removeCard,
  }: { card: Card; index: number; removeCard: (index: number) => void } =
    $props();
</script>

<div class="group border-primary padding-default relative">
  <button
    type="button"
    onclick={() => removeCard(index)}
    class="hover:bg-red/12 hover:text-red absolute top-0.5 left-0.5 z-10 hidden rounded-full bg-stone-200 p-1 text-stone-900 transition-colors md:block dark:bg-stone-900 dark:text-stone-200"
    title="Убрать"
    data-cy="flashcard-remove-button"
  >
    x
  </button>

  <div class="gap-default flex flex-col">
    <Textfield
      name={`cards[${index}][front]`}
      id={`cards[${index}][front]`}
      placeholder="Apple (n)"
      label="Лицо"
      bind:value={card.front}
    />

    <Textarea
      rows={3}
      class="resize-none"
      name={`cards[${index}][back]`}
      bind:value={card.back}
      placeholder="The creator of the Mac"
    />
  </div>
</div>
