<script lang="ts">
  import type { Card as CardType } from "$lib/types";
  import Button from "../../buttons/Button.svelte";
  import { Textfield, Tutorial } from "../../forms/index.js";
  import Card from "../Card.svelte";

  let {
    index,
    card,
    removeCard,
  }: { card: CardType; index: number; removeCard: (index: number) => void } =
    $props();
</script>

<Card type="elevated" class="gap-2">
  <Tutorial slug="flashcard-edit-front">
    <Textfield
      name={`cards[${index}][front]`}
      id={`cards[${index}][front]`}
      label="Лицо"
      data-cy={`flashcard-front-${index}`}
      bind:value={card.front}
    />
  </Tutorial>

  <Tutorial slug="flashcard-edit-back">
    <Textfield
      name={`cards[${index}][back]`}
      id={`cards[${index}][back]`}
      label="Оборот"
      data-cy={`flashcard-back-${index}`}
      bind:value={card.back}
    />
  </Tutorial>
  <Tutorial slug="flashcard-edit-hint">
    <Textfield
      name={`cards[${index}][tip]`}
      id={`cards[${index}][tip]`}
      label="Подсказка"
      data-cy={`flashcard-tip-${index}`}
      bind:value={card.tip}
    />
  </Tutorial>
  <Tutorial slug="flashcard-edit-delete">
    <Button
      class="mt-4"
      type="button"
      variant="tonal"
      data-cy={`flashcard-delete-${index}`}
      onclick={() => removeCard(index)}>Удалить</Button
    >
  </Tutorial>
</Card>
