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

import {Label} from '$lib/components';

<div class="group border-fat padding-default relative">
  <button
    type="button"
    onclick={() => removeCard(index)}
    class="absolute -top-2 -right-2 z-10 hidden bg-stone-700 p-1.5 text-stone-50 hover:bg-red-700 focus:ring focus:ring-red-400 md:block"
    title="Remove card"
  >
    <X class="size-4" />
  </button>

  <div class="gap-default flex flex-col">
    <Label name="Лицо">
      <Input name={`cards[${index}][front]`} placeholder="Apple (n)" />
    </Label>

    <Label name="Оборот">
      <Textarea
        name={`cards[${index}][back]`}
        bind:value={card.back}
        placeholder="The creator of the Mac"
      />
    </Label>
  </div>
</div>
