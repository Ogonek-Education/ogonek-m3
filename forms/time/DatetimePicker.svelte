<script lang="ts">
  import { format, fromZonedTime, toZonedTime } from "date-fns-tz";
  import { isValid, parse } from "date-fns";
  import { Hr, HStack, VStack } from "../../layout";
  import { Input } from "../input";

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

  // Local state for inputs
  let dateString = $state("");
  let startTimeString = $state("");
  let endTimeString = $state("");

  // Initialize from UTC timestamps
  $effect(() => {
    if (isValid(new Date(dtstartTime))) {
      const localStart = toZonedTime(dtstartTime, userTimezone);
      dateString = format(localStart, "yyyy-MM-dd");
      startTimeString = format(localStart, "HH:mm");

      if (dtendTime && isValid(new Date(dtendTime))) {
        const localEnd = toZonedTime(dtendTime, userTimezone);
        endTimeString = format(localEnd, "HH:mm");
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

  // Update hidden inputs whenever local values change
  $effect(() => {
    const start = localToUTC(dateString, startTimeString);
    if (start) dtstartTime = start;

    const end = localToUTC(dateString, endTimeString);
    if (end) dtendTime = end;
  });
</script>

<HStack>
  <!-- Hidden inputs for form submission -->
  <input type="hidden" name="dtstartTime" value={dtstartTime} />
  <input type="hidden" name="dtendTime" value={dtendTime || ""} />

  <VStack>
    <Input type="date" name="date" bind:value={dateString} />

    <Hr />

    <Input type="time" name="startTime" bind:value={startTimeString} />

    <Input type="time" name="endTime" bind:value={endTimeString} />
  </VStack>

  {#if import.meta.env.DEV}
    <div class="mt-2 text-xs text-stone-500">
      Start UTC: {dtstartTime}<br />
      End UTC: {dtendTime}<br />
      TZ: {userTimezone}
    </div>
  {/if}
</HStack>
