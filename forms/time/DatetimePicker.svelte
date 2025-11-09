<script lang="ts">
  import {
    format,
    parse,
    isValid,
    addMinutes,
    differenceInMinutes,
  } from "date-fns";
  import { HStack, VStack, Divider } from "../../layout";
  import { Helper, Input, Label } from "..";

  let {
    dtstartTime,
    dtendTime,
    form,
  }: {
    dtstartTime: string;
    dtendTime?: string | null;
    form: any;
  } = $props();

  let localDateString = $state("");
  let dtstartLocalTimeString = $state("");
  let dtendLocalTimeString = $state("");
  let storedDurationMinutes = $state(60);
  let isInitialized = $state(false);

  $effect(() => {
    if (isValid(new Date(dtstartTime))) {
      const localStart = new Date(dtstartTime);
      localDateString = format(localStart, "yyyy-MM-dd");
      dtstartLocalTimeString = format(localStart, "HH:mm");

      if (dtendTime && isValid(new Date(dtendTime))) {
        const localEnd = new Date(dtendTime);
        dtendLocalTimeString = format(localEnd, "HH:mm");

        if (!isInitialized) {
          storedDurationMinutes = differenceInMinutes(localEnd, localStart);
          isInitialized = true;
        }
      } else if (!isInitialized) {
        isInitialized = true;
        updateEndTimeFromDuration();
      }
    }
  });

  function updateEndTimeFromDuration() {
    if (!localDateString || !dtstartLocalTimeString) return;

    const localStartDateTimeString = `${localDateString} ${dtstartLocalTimeString}`;
    const localStartDateTime = parse(
      localStartDateTimeString,
      "yyyy-MM-dd HH:mm",
      new Date(),
    );

    if (!isValid(localStartDateTime)) return;

    const localEndDateTime = addMinutes(
      localStartDateTime,
      storedDurationMinutes,
    );
    dtendLocalTimeString = format(localEndDateTime, "HH:mm");

    dtstartTime = localStartDateTime.toISOString();
    dtendTime = localEndDateTime.toISOString();
  }

  function handleStartTimeChange() {
    updateEndTimeFromDuration();
  }

  function handleEndTimeChange() {
    if (!localDateString || !dtstartLocalTimeString || !dtendLocalTimeString)
      return;

    const localStartDateTimeString = `${localDateString} ${dtstartLocalTimeString}`;
    const localStartDateTime = parse(
      localStartDateTimeString,
      "yyyy-MM-dd HH:mm",
      new Date(),
    );

    let localEndDateTimeString = `${localDateString} ${dtendLocalTimeString}`;
    let localEndDateTime = parse(
      localEndDateTimeString,
      "yyyy-MM-dd HH:mm",
      new Date(),
    );

    if (localEndDateTime <= localStartDateTime) {
      localEndDateTime = addMinutes(localEndDateTime, 24 * 60);
    }

    if (!isValid(localStartDateTime) || !isValid(localEndDateTime)) return;

    storedDurationMinutes = differenceInMinutes(
      localEndDateTime,
      localStartDateTime,
    );

    dtstartTime = localStartDateTime.toISOString();
    dtendTime = localEndDateTime.toISOString();
  }

  function handleDateChange() {
    updateEndTimeFromDuration();
  }
</script>

<HStack>
  <input type="hidden" name="dtstartTime" bind:value={dtstartTime} />
  <input type="hidden" name="dtendTime" bind:value={dtendTime} />

  <VStack>
    <Label name="Дата">
      <Input
        type="date"
        name="date"
        onchange={handleDateChange}
        bind:value={localDateString}
      />
    </Label>

    <Divider />

    <Label name="Начало">
      <Input
        type="time"
        name="startTime"
        onchange={handleStartTimeChange}
        bind:value={dtstartLocalTimeString}
      />
      {#if form.noDtstart}
        <Helper color="red">Тут нет мужского начала</Helper>
      {/if}
    </Label>

    <Label name="Конец">
      <Input
        type="time"
        name="endTime"
        onchange={handleEndTimeChange}
        bind:value={dtendLocalTimeString}
      />
      {#if form.endBeforeStart}
        <Helper color="red">Проверьте время</Helper>
      {/if}
    </Label>
  </VStack>
</HStack>
