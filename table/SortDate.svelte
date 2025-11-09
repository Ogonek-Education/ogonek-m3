<script lang="ts">
  import { sortBy, sortOrder } from "$lib/stores";
  import type { SortBy } from "$lib/types";
  import {
    ArrowDownAZ,
    ArrowUpAZ,
    CalendarArrowDown,
    CalendarArrowUp,
  } from "@lucide/svelte";
  import { Button } from "../buttons";

  const sortFields: { value: SortBy; label: string; isTime: boolean }[] = [
    { value: "created_at", label: "Создание", isTime: true },
    { value: "updated_at", label: "Обновление", isTime: true },
    { value: "title", label: "Название", isTime: false },
    { value: "due_date", label: "Срок", isTime: true },
  ];

  const isTimeSort = $derived(
    sortFields.find((f) => f.value === $sortBy)?.isTime ?? false,
  );
</script>

<Button
  tooltipContent="Сортировка"
  Icon={isTimeSort
    ? $sortOrder === "asc"
      ? CalendarArrowUp
      : CalendarArrowDown
    : $sortOrder === "asc"
      ? ArrowUpAZ
      : ArrowDownAZ}
  onclick={() => ($sortOrder = $sortOrder === "asc" ? "desc" : "asc")}
/>

<select
  name="sort"
  bind:value={$sortBy}
  class="bg-clickable border-fat padding-default flex h-13 w-max items-center justify-center text-center font-medium transition-all"
>
  {#each sortFields as field}
    <option value={field.value}>{field.label}</option>
  {/each}
</select>
