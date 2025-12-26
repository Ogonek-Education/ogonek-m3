<script lang="ts">
  import { page } from "$app/state";
  import { ListItem } from "$lib/components";
  import type { EventSmall } from "$lib/types";
  import { formatEventTime, getVideoCallService } from "$lib/utils";

  const {
    event,
    deactivate = false,
  }: { event: EventSmall; asChild?: boolean; deactivate?: boolean } = $props();

  const videoCallService = $derived(
    event.location ? getVideoCallService(event.location) : null,
  );

  const eventDate = $derived(new Date(event.dtstartTime));
  const eventHref = $derived(
    `/${page.params.role}/calendar/${eventDate.getFullYear()}/${
      eventDate.getMonth() + 1
    }/${eventDate.getDate()}/${event.id}`,
  );
</script>

<ListItem
  data-cy="calendar-event-item"
  headline={page.params.role === "s" ? "Занятие" : event.title}
  selected={false}
  supporting={event.location
    ? videoCallService
      ? videoCallService
      : event.location
    : "Без локации"}
  overline={formatEventTime(event.dtstartTime, event.dtendTime ?? "")}
  href={deactivate ? null : eventHref}
/>
