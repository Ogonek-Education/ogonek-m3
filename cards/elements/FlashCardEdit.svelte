<script lang="ts">
  import type { Card as CardType } from "$lib/types";
  import Button from "../../buttons/Button.svelte";
  import { Textfield } from "../../forms";
  import Card from "../Card.svelte";

  let {
    index,
    card,
    removeCard,
  }: { card: CardType; index: number; removeCard: (index: number) => void } =
    $props();
</script>

<Card>
  <Textfield
    name={`cards[${index}][front]`}
    id={`cards[${index}][front]`}
    placeholder="Apple (n)"
    label="Лицо"
    bind:value={card.front}
  />

  <Textfield
    name={`cards[${index}][back]`}
    id={`cards[${index}][back]`}
    placeholder="The creator of the Mac"
    label="Лицо"
    bind:value={card.back}
  />

  <Textfield
    name={`cards[${index}][tip]`}
    id={`cards[${index}][tip]`}
    placeholder="Newton had this as his revelation"
    label="Подсказка"
    bind:value={card.tip}
  />

  <Button type="button" variant="tonal" onclick={() => removeCard(index)}
    >Удалить</Button
  >
</Card>
