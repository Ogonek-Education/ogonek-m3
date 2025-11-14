<script lang="ts">
  import { sortBy, sortOrder } from "$lib/stores";
  import {
    ArrowDownAZ,
    ArrowUpAZ,
    CalendarArrowDown,
    CalendarArrowUp,
  } from "@lucide/svelte";
  import { Button } from "../buttons";
  import { Select, type SelectOptionType } from "../forms";
  import VStack from "../layout/stack/VStack.svelte";

  const sortFields: SelectOptionType<string>[] = [
    { value: "created_at", name: "Создание", isTime: true },
    { value: "updated_at", name: "Обновление", isTime: true },
    { value: "title", name: "Название", isTime: false },
    { value: "due_date", name: "Срок", isTime: true },
  ];

  const isTimeSort = $derived(
    sortFields.find((f) => f.value === $sortBy)?.isTime ?? false,
  );
</script>

<VStack class="hidden items-center md:flex">
  <Button
    type="button"
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
  <Select
    placeholder="По чему сортировка"
    items={sortFields}
    name="sort"
    bind:value={$sortBy}
  />
</VStack>
