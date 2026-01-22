<script lang="ts">
  import Item from "./Item.svelte";
  import { calendarpicker } from "../theme.js";

  let {
    focusedMonth,
    focusedYear,
    dateValidator,
    chosenDate = $bindable(),
  }: {
    focusedMonth: number;
    focusedYear: number;
    dateValidator: (date: string) => boolean;
    chosenDate: string;
  } = $props();

  const makeCalendar = (year: number, month: number) => {
    const firstDay = new Date(year, month, 1);

    const offset = (firstDay.getDay() + 6) % 7;

    return Array.from({ length: 42 }, (_, i: number) => {
      const date = new Date(year, month, i - offset + 1);
      const day = date.getDate();

      const iso =
        year.toString().padStart(4, "0") +
        "-" +
        (month + 1).toString().padStart(2, "0") +
        "-" +
        day.toString().padStart(2, "0");

      return { disabled: date.getMonth() !== month, day, iso };
    });
  };

  let today = $state(new Date());
  setInterval(() => (today = new Date()), 1000 * 60);

  const { base, weekday } = calendarpicker();
</script>

<div class={base()}>
  {#each ["П", "В", "С", "Ч", "П", "С", "В"] as day}
    <div class={weekday()}>{day}</div>
  {/each}

  {#each makeCalendar(focusedYear, focusedMonth) as day (day.iso + (day.disabled ? "-disabled" : ""))}
    <Item
      disabled={day.disabled || !dateValidator(day.iso)}
      today={!day.disabled &&
        focusedYear == today.getFullYear() &&
        focusedMonth == today.getMonth() &&
        day.day == today.getDate()}
      selected={!day.disabled && day.iso == chosenDate}
      label={day.day.toString()}
      onclick={() => (chosenDate = day.iso)}
    />
  {/each}
</div>
