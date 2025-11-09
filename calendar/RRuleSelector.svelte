<script lang="ts">
  import { Heading } from "$lib/components/library";
  import { parseRRuleDays, WEEKDAYS } from "$lib/utils";
  import VStack from "../layout/VStack.svelte";

  let { rrule }: { rrule?: string | null } = $props();

  function toggleDay(dayIndex: number) {
    selectedDays = selectedDays.includes(dayIndex)
      ? selectedDays.filter((d: number) => d !== dayIndex)
      : [...selectedDays, dayIndex].sort();
  }

  function isSelected(dayIndex: number) {
    return selectedDays.includes(dayIndex);
  }

  let selectedDays = $state(parseRRuleDays(rrule));

  const rule = $derived.by(() => {
    if (selectedDays.length === 0) return "";

    const byDay = selectedDays
      .map((index: number) => WEEKDAYS.find((d) => d.index === index)?.ical)
      .filter(Boolean)
      .join(",");

    return `FREQ=WEEKLY;BYDAY=${byDay}`;
  });
</script>

<div class="gap-narrow padding-default flex flex-col">
  <Heading>Повторения</Heading>
  <VStack>
    {#each WEEKDAYS as day}
      <button
        type="button"
        class="flex h-12 w-12 items-center justify-center font-bold {isSelected(
          day.index,
        )
          ? 'border-fat-accent bg-accent/10'
          : 'bg-clickable border-fat hover:bg-stone-100 dark:hover:bg-stone-800'}"
        title={day.full}
        onclick={() => toggleDay(day.index)}
        aria-pressed={isSelected(day.index)}
        aria-label="Toggle {day.full}"
      >
        {day.label}
      </button>
    {/each}
  </VStack>
  <input type="hidden" name="rrule" value={rule} />
</div>
