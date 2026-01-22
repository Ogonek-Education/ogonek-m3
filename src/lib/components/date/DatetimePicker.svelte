<script lang="ts">
  import { Title, VStack, TimeField, Layer } from "$lib/components";
  import Tutorial from "../forms/tooltip/Tutorial.svelte";
  import DateField from "./DateField.svelte";

  let {
    dtstartTime,
    dtendTime,
    form,
  }: {
    dtstartTime: string;
    dtendTime?: string | null;
    form?: any;
  } = $props();

  const userTimezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  const durations = [30, 45, 60, 90, 120] as const;

  // Local state
  let dateString = $state("");
  let startTimeString = $state("");
  let selectedDuration = $state(60); // default to 60min
  let dtstartTz = $state(userTimezone);
  let dtendTz = $state(userTimezone);

  const pad = (value: number): string => value.toString().padStart(2, "0");
  const formatDateInput = (date: Date): string =>
    `${date.getFullYear()}-${pad(date.getMonth() + 1)}-${pad(date.getDate())}`;
  const formatTimeInput = (date: Date): string =>
    `${pad(date.getHours())}:${pad(date.getMinutes())}`;

  // Initialize from UTC timestamps
  $effect(() => {
    const start = new Date(dtstartTime);
    if (isNaN(start.getTime())) return;

    dateString = formatDateInput(start);
    startTimeString = formatTimeInput(start);
    dtstartTz = userTimezone;
    dtendTz = userTimezone;

    // Calculate duration if dtendTime exists
    if (dtendTime) {
      const end = new Date(dtendTime);
      if (!isNaN(end.getTime())) {
        const diffMinutes = Math.round(
          (end.getTime() - start.getTime()) / 60000,
        );
        selectedDuration = durations.find((d) => d === diffMinutes) ?? 60;
      }
    }
  });

  // Convert local date + time → UTC ISO string
  function localToUTC(date: string, time: string): string | null {
    if (!date || !time) return null;
    const localDateTime = new Date(`${date}T${time}`);
    if (isNaN(localDateTime.getTime())) return null;
    return localDateTime.toISOString();
  }

  // Update hidden inputs whenever local values or duration change
  $effect(() => {
    const start = localToUTC(dateString, startTimeString);
    if (start) {
      dtstartTime = start;
      dtstartTz = userTimezone;

      const startDate = new Date(start);
      const endDate = new Date(startDate.getTime() + selectedDuration * 60000);
      dtendTime = endDate.toISOString();
      dtendTz = userTimezone;
    }
  });
</script>

<!-- Hidden inputs for form submission -->
<input
  type="hidden"
  name="dtstartTime"
  value={dtstartTime}
  data-cy="calendar-dtstart-time"
/>
<input
  type="hidden"
  name="dtendTime"
  value={dtendTime || ""}
  data-cy="calendar-dtend-time"
/>
<input
  type="hidden"
  name="dtstartTz"
  value={dtstartTz}
  data-cy="calendar-dtstart-tz"
/>
<input
  type="hidden"
  name="dtendTz"
  value={dtendTz}
  data-cy="calendar-dtend-tz"
/>
<Tutorial slug="calendar-new-date">
  <DateField
    label="Дата встречи"
    bind:value={dateString}
    data-cy="calendar-date"
  />
</Tutorial>
<Tutorial slug="calendar-new-time">
  <TimeField
    label="Начало встречи"
    bind:value={startTimeString}
    data-cy="calendar-time"
  />
</Tutorial>

<Title>Длительность</Title>
<VStack>
  {#each durations as duration}
    <button
      type="button"
      class="md-sys-typescale-body-medium relative rounded-lg px-3 py-1.5 transition-colors
                 {selectedDuration === duration
        ? 'bg-md-sys-color-primary  text-md-sys-color-on-primary'
        : 'bg-md-sys-color-primary-container text-md-sys-color-on-primary-container '}"
      onclick={() => (selectedDuration = duration)}
      data-cy={`duration-option-${duration}`}
    >
      {duration}м
      <Layer />
    </button>
  {/each}
</VStack>
