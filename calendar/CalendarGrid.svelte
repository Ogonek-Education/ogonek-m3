<script lang="ts">
  import { page } from "$app/state";
  import type { EventSmall } from "$lib/types/api/calendar";
  import { getLocaleFromCookie } from "$lib/utils";
  import { generateMonthDays, type MonthDay } from "$lib/utils/time/calendar";
  import { Calendar1, ChevronLeft, ChevronRight } from "@lucide/svelte";
  import { fly } from "svelte/transition";
  import {
    Button,
    Heading,
    HStack,
    P,
    VStack,
    Divider,
  } from "$lib/components/library";

  const { events }: { events: EventSmall[] } = $props();

  const selectedMonth = $derived.by(() => {
    if (page.params.year && page.params.month) {
      return new Date(Number(page.params.year), Number(page.params.month) - 1);
    }
    return new Date();
  });

  const selectedDate = $derived.by(() => {
    if (page.params.year && page.params.month && page.params.day) {
      return new Date(
        Number(page.params.year),
        Number(page.params.month) - 1,
        Number(page.params.day),
      );
    }
    return null;
  });

  const calendarData = $derived.by(() => {
    return generateMonthDays(selectedMonth, events, getLocaleFromCookie());
  });

  const { monthDays, monthName, year } = $derived(calendarData);

  const navigationUrls = $derived.by(() => {
    const currentYear = Number(page.params.year);
    const currentMonth = Number(page.params.month);

    const nextYear = currentMonth === 12 ? currentYear + 1 : currentYear;
    const nextMonthNum = currentMonth === 12 ? 1 : currentMonth + 1;

    const prevYear = currentMonth === 1 ? currentYear - 1 : currentYear;
    const prevMonthNum = currentMonth === 1 ? 12 : currentMonth - 1;

    return {
      next: `/${page.params.role}/calendar/${nextYear}/${nextMonthNum}`,
      prev: `/${page.params.role}/calendar/${prevYear}/${prevMonthNum}`,
    };
  });

  const isSelectedDay = (actualDate: Date): boolean => {
    return selectedDate
      ? actualDate.getTime() === selectedDate.getTime()
      : false;
  };

  const todayUrl = $derived.by(() => {
    const today = new Date();
    return `/${page.params.role}/calendar/${today.getFullYear()}/${today.getMonth() + 1}`;
  });
  let showTopBorder = $state(false);
  let showBottomBorder = $state(false);
  function updateScrollIndicators(element: HTMLElement) {
    const { scrollTop, scrollHeight, clientHeight } = element;
    showTopBorder = scrollTop > 0;
    showBottomBorder = scrollTop + clientHeight < scrollHeight - 5;
  }
</script>

{#snippet Day(day: MonthDay)}
  <a
    href="/{page.params
      .role}/calendar/{day.actualDate.getFullYear()}/{day.actualDate.getMonth() +
      1}/{day.actualDate.getDate()}"
    class="padding-narrow flex h-40 flex-col items-end transition-colors duration-150
             {day.isCurrentMonth
      ? isSelectedDay(day.actualDate)
        ? 'border-fat bg-material'
        : 'bg-clickable border-fat'
      : 'cursor-default text-stone-400'}"
  >
    <div
      class="p-1 font-medium {day.isToday
        ? 'bg-accent flex size-8 items-center justify-center rounded-full text-stone-50'
        : ''}"
    >
      {day.day}
    </div>
    {#if day.events.length > 0}
      <div class="gap-narrow flex w-full flex-col overflow-auto">
        {#each day.events.slice(0, 3) as event}
          {@render Event(event)}
        {/each}
        {#if day.events.length > 3}
          <div class="text-xs text-stone-500">
            И еще {day.events.length - 3}
          </div>
        {/if}
      </div>
    {/if}
  </a>
{/snippet}

{#snippet Event(event: EventSmall)}
  <div class="bg-accent/20 text-accent w-full truncate rounded p-1 text-xs">
    {page.params.role === "t" ? event.title : "Занятие"}
  </div>
{/snippet}

<div
  class="scrollbar-none max-h-[80dvh] overflow-y-scroll
  {showTopBorder ? 'border-t-2 border-stone-300 dark:border-stone-800' : ''}
    {showBottomBorder
    ? 'border-b-2 border-stone-300 dark:border-stone-800'
    : ''}"
  onscroll={(e) => updateScrollIndicators(e.currentTarget)}
>
  <div
    class="gap-narrow padding-default grid grid-cols-7"
    in:fly|global={{ y: 20 }}
  >
    {#each ["Пн", "Вт", "Ср", "Чт", "Пт", "Сб", "Вс"] as dayLabel}
      <P align="right">{dayLabel}</P>
    {/each}

    {#each monthDays as day}
      {@render Day(day)}
    {/each}
  </div>
</div>

<VStack>
  <HStack>
    <Heading>Московское время</Heading>
    <VStack>
      <Heading class="capitalize">{monthName} {year}</Heading>
      <Divider></Divider>
      <Button
        tooltipContent="Предыдущий месяц"
        href={navigationUrls.prev}
        Icon={ChevronLeft}
      />
      <Button
        tooltipContent="Сегодня"
        color="prominent"
        href={todayUrl}
        Icon={Calendar1}
      ></Button>
      <Button
        tooltipContent="Следующий месяц"
        href={navigationUrls.next}
        Icon={ChevronRight}
      />
    </VStack>
  </HStack>
</VStack>
