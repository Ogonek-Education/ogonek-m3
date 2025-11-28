<script lang="ts">
  import { Body, Label, Card, Headline, Title, Icon } from "$lib/components";
  import type { Card as CardType } from "$lib/types";
  import type { Component, Snippet } from "svelte";
  import type { HTMLAttributes } from "svelte/elements";
  type WordCardProps = {
    card: CardType;
    flipped?: boolean;
    onTurn?: (isFlipped: boolean) => void;
    forceTurn?: boolean;
  };

  let {
    flipped = $bindable(false),
    onTurn,
    forceTurn = false,
    card = {
      back: "Я говорю",
      front: "hablar",
      id: "1",
      tip: "Yo hablo, tú hablas, él/ella habla. Для формального «вы» используйте «usted habla».",
    },
  }: WordCardProps = $props();

  const typeScaleSteps: Array<{
    limit: number;
    component: Component<HTMLAttributes<HTMLElement> & { children: Snippet }>;
  }> = [
    { limit: 80, component: Title },
    { limit: 120, component: Body },
    { limit: Number.POSITIVE_INFINITY, component: Label },
  ];

  const pickTypeComponent = (text: string) => {
    const length = text?.trim().length ?? 0;
    return (
      typeScaleSteps.find(({ limit }) => length <= limit)?.component || Headline
    );
  };

  const isFlipped = $derived(forceTurn || flipped);

  const displayedText = $derived(isFlipped ? card?.back : card?.front);
  const TextComponent = $derived(pickTypeComponent(displayedText));

  function handleToggle() {
    const nextState = forceTurn ? true : !flipped;
    flipped = nextState;
    onTurn?.(nextState);
  }
</script>

<Card
  type={isFlipped ? "outlined" : "filled"}
  class="h-24"
  aria-label="Flashcard front example"
>
  <div class="flex justify-between">
    <TextComponent class="text-md-sys-color-on-surface w-3/4">
      {displayedText}
    </TextComponent>
  </div>
  {#if card.tip && !isFlipped}
    <Body class="text-md-sys-color-on-surface-variant">
      {card.tip}
    </Body>
  {/if}

  <button
    onclick={handleToggle}
    class=" state-layer absolute right-1 bottom-1 size-12 before:rounded-full {isFlipped
      ? 'text-md-sys-color-tertiary hover:before:bg-md-sys-color-tertiary/8'
      : 'text-md-sys-color-primary hover:before:bg-md-sys-color-primary/8'}"
  >
    <Icon name="swipe_vertical" />
  </button></Card
>
