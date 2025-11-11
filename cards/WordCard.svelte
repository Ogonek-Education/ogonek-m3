<script lang="ts">
  import { fly } from "svelte/transition";
  import type { Card } from "$lib/types";
  import { P } from "../typography";

  let {
    toggleCard,
    card,
    flippedCards = $bindable(),
  }: {
    toggleCard: (cardId: string) => void;
    card: Card;
    flippedCards: Set<string>;
  } = $props();

  const truncateIfNeeded = (text: string) => {
    return text.length > 120
      ? "text-sm"
      : text.length > 80
        ? "text-base"
        : "text-lg";
  };

  const isFlipped = $derived(flippedCards.has(card.id));
</script>

<div
  data-cy="word-card-front"
  class="perspective-1000 relative h-48 transform-gpu cursor-pointer"
  onclick={() => toggleCard(card.id)}
  onkeydown={(e) => e.key === "Enter" && toggleCard(card.id)}
  role="button"
  tabindex="0"
  aria-label={isFlipped ? "Show front of card" : "Show back of card"}
>
  {#if !isFlipped}
    <div
      in:fly={{ x: -20, duration: 300 }}
      out:fly={{ x: -20, duration: 300 }}
      class="border-primary bg-bg-secondary padding-default absolute inset-0 flex items-center justify-center backface-hidden"
    >
      <div class="flex flex-col items-center justify-center">
        <P class={truncateIfNeeded(card.front)}>
          {card.front}
        </P>
        {#if card.mediaUrl}
          <div class="absolute top-2 right-2">
            <img
              src={card.mediaUrl}
              alt="Card media"
              class="h-10 w-10 object-cover"
            />
          </div>
        {/if}
        <div class="absolute right-3 bottom-2">
          <P>Клик перевернет</P>
        </div>
      </div>
    </div>
  {:else}
    <!-- Card Back -->
    <div
      in:fly={{ y: 20, duration: 300 }}
      out:fly={{ y: 20, duration: 300 }}
      class="bg-primary border-primary-accent padding-default absolute flex size-full items-center justify-center backface-hidden"
    >
      <div class="flex h-full w-full flex-col items-center justify-center">
        <P class={truncateIfNeeded(card.back)}>
          {card.back}
        </P>
      </div>
    </div>
  {/if}
</div>

<style>
  .perspective-1000 {
    perspective: 1000px;
  }
  .backface-hidden {
    backface-visibility: hidden;
  }
</style>
