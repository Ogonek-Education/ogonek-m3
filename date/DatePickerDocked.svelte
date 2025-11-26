<script lang="ts">
  import Button from "../buttons/Button.svelte";
  import CalendarPicker from "./_picker/CalendarPicker.svelte";
  import FocusPicker from "./_picker/FocusPicker.svelte";
  import Header from "./_picker/Header.svelte";
  import { datetimepicker } from "./theme";

  const now = new Date();

  let {
    date = "",
    clearable,
    focusedMonth = $bindable(parseInt(date.slice(5, 7)) - 1 || now.getMonth()),
    focusedYear = $bindable(parseInt(date.slice(0, 4)) || now.getFullYear()),
    startYear = now.getFullYear() - 50,
    endYear = now.getFullYear() + 10,
    dateValidator = (_date: string) => true,
    close,
    setDate,
  }: {
    date?: string;
    clearable: boolean;
    focusedMonth?: number;
    focusedYear?: number;
    startYear?: number;
    endYear?: number;
    dateValidator?: (date: string) => boolean;
    close: () => void;
    setDate: (date: string) => void;
  } = $props();

  let currentView: "calendar" | "year" | "month" = $state("calendar");
  let chosenDate = $state(date);

  const getLongMonth = (month: number) =>
    new Date(0, month).toLocaleDateString(undefined, { month: "long" });

  const { base, buttons } = datetimepicker();
</script>

<div class={base()}>
  <Header
    bind:currentView
    bind:focusedMonth
    bind:focusedYear
    {startYear}
    {endYear}
  />
  {#if currentView == "calendar"}
    <CalendarPicker
      {focusedMonth}
      {focusedYear}
      {dateValidator}
      bind:chosenDate
    />
    <div class={buttons()}>
      {#if clearable}
        <Button
          class="mr-auto"
          variant="text"
          onclick={() => (chosenDate = "")}
          type="button">Очистить</Button
        >
      {/if}

      <Button
        variant="text"
        onclick={() => {
          chosenDate = date;
          close();
        }}
        type="button">Отмена</Button
      >
      <Button
        variant="text"
        disabled={!clearable && !chosenDate}
        onclick={() => {
          setDate(chosenDate);
          close();
        }}
        type="button">Готово</Button
      >
    </div>
  {:else if currentView == "month"}
    <FocusPicker
      options={Array.from({ length: 12 }, (_, i) => ({
        name: getLongMonth(i),
        selected: i == focusedMonth,
        activate: () => {
          focusedMonth = i;
          currentView = "calendar";
        },
      }))}
    />
  {:else}
    <FocusPicker
      options={Array.from({ length: endYear - startYear }, (_, i) => ({
        name: (startYear + i + 1).toString(),
        selected: startYear + i + 1 == focusedYear,
        activate: () => {
          focusedYear = startYear + i + 1;
          currentView = "calendar";
        },
      }))}
    />
  {/if}
</div>
