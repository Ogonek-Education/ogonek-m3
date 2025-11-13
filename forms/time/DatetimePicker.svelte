<script lang="ts">
  import { format, fromZonedTime, toZonedTime } from "date-fns-tz";
  import { isValid, parse, addMinutes } from "date-fns";
  import { Hr, HStack, VStack } from "../../layout";
  import { Input } from "../input";
  import { Label } from "../label";
  import { dev } from "$app/environment";
  import { Heading } from "../../typography";

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

  // Initialize from UTC timestamps
  $effect(() => {
    if (isValid(new Date(dtstartTime))) {
      const localStart = toZonedTime(dtstartTime, userTimezone);
      dateString = format(localStart, "yyyy-MM-dd");
      startTimeString = format(localStart, "HH:mm");

      // Calculate duration if dtendTime exists
      if (dtendTime && isValid(new Date(dtendTime))) {
        const start = new Date(dtstartTime);
        const end = new Date(dtendTime);
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
    const localDateTime = parse(
      `${date} ${time}`,
      "yyyy-MM-dd HH:mm",
      new Date(),
    );
    if (!isValid(localDateTime)) return null;
    return fromZonedTime(localDateTime, userTimezone).toISOString();
  }

  // Update hidden inputs whenever local values or duration change
  $effect(() => {
    const start = localToUTC(dateString, startTimeString);
    if (start) {
      dtstartTime = start;
      // Calculate end time based on duration
      const startDate = new Date(start);
      const endDate = addMinutes(startDate, selectedDuration);
      dtendTime = endDate.toISOString();
    }
  });
</script>

<HStack class="padding-default">
  <!-- Hidden inputs for form submission -->
  <input type="hidden" name="dtstartTime" value={dtstartTime} />
  <input type="hidden" name="dtendTime" value={dtendTime || ""} />

  <VStack size="w">
    <HStack>
      <Heading tag="h3">Дата</Heading>
      <Input type="date" name="date" bind:value={dateString} />
    </HStack>
    <HStack>
      <Heading tag="h3">Начало</Heading>
      <Input type="time" name="startTime" bind:value={startTimeString} />
    </HStack>
  </VStack>
  <Heading tag="h3">Длительность</Heading>
  <VStack>
    {#each durations as duration}
      <button
        type="button"
        class="rounded-2xl border px-3 py-1.5 text-sm font-medium transition-colors
                 {selectedDuration === duration
          ? 'bg-accent/20 border-accent text-text-white'
          : 'bg-bg-secondary text-text-tertiary border-border-primary'}"
        onclick={() => (selectedDuration = duration)}
      >
        {duration}м
      </button>
    {/each}
  </VStack>
</HStack>
{#if dev}
  <div class="mt-2 text-xs text-stone-500">
    Start UTC: {dtstartTime}<br />
    End UTC: {dtendTime}<br />
    Duration: {selectedDuration}m<br />
    TZ: {userTimezone}
  </div>
{/if}
