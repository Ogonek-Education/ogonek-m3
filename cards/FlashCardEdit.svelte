<script lang="ts">
  import { X } from "@lucide/svelte";
  import type { Card } from "$lib/types";
  import { Input, Label, Textarea } from "../forms";

  let {
    index,
    card,
    removeCard,
  }: { card: Card; index: number; removeCard: (index: number) => void } =
    $props();
</script>

<div class="group border-fat padding-default relative">
  <button
    type="button"
    onclick={() => removeCard(index)}
    class="absolute top-0.5 left-0.5 z-10 hidden rounded-full bg-stone-200 p-1 text-stone-900 transition-colors hover:bg-red-500 hover:text-red-50 md:block dark:bg-stone-900 dark:text-stone-200"
    title="Убрать"
  >
    <X class="size-4" />
  </button>

  <div class="gap-default flex flex-col">
    <Label name="Лицо">
      <Input name={`cards[${index}][front]`} placeholder="Apple (n)" />
    </Label>

    <Label name="Оборот">
      <Textarea
        rows={3}
        class="resize-none"
        name={`cards[${index}][back]`}
        bind:value={card.back}
        placeholder="The creator of the Mac"
      />
    </Label>
  </div>
</div>
