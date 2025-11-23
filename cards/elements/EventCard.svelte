<script lang="ts">
  import { page } from "$app/state";
  import type { EventSmall } from "$lib/types/api/calendar";
  import { formatEventTime, getVideoCallService } from "$lib/utils";

  const {
    event,
    deactivate = false,
  }: { event: EventSmall; deactivate?: boolean } = $props();

  const videoCallService = event.location
    ? getVideoCallService(event.location)
    : null;
</script>

<Card {deactivate} href="{page.params.day}/{event.id}">
  <VStack class="justify-start">
    <Heading
      tag="h3"
      class={event.status === "cancelled" ? "line-through" : ""}
    >
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
  <Heading>
    {formatEventTime(event.dtstartTime, event.dtendTime ?? "")}
  </Heading>
</Card>
