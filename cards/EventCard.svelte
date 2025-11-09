<script lang="ts">
  import { page } from "$app/state";
  import type { EventSmall } from "$lib/types/api/calendar";
  import { formatEventTime, getVideoCallService } from "$lib/utils";
  import { VStack } from "../library";
  import { P, Heading } from "../library/typography";
  import { Divider } from "../UI";

  import CardClickable from "./CardClickable.svelte";

  const {
    event,
    deactivate = false,
  }: { event: EventSmall; deactivate?: boolean } = $props();

  const videoCallService = event.location
    ? getVideoCallService(event.location)
    : null;
</script>

<CardClickable {deactivate} href="{page.params.day}/{event.id}">
  <Heading>
    {formatEventTime(event.dtstartTime, event.dtendTime ?? "")}
  </Heading>
  <VStack>
    <Heading class={event.status === "cancelled" ? "line-through" : ""}>
      {page.params.role === "t" ? event.title : "Занятие"}
    </Heading>
    {#if event.location}
      <Divider />
      {#if videoCallService}
        <P>{videoCallService}</P>
      {:else}
        <P>
          {event.location}
        </P>
      {/if}
    {/if}
  </VStack>
</CardClickable>
