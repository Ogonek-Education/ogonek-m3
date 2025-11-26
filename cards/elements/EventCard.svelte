<script lang="ts">
  import { page } from "$app/state";
  import type { EventSmall } from "$lib/types";
  import { formatEventTime, getVideoCallService } from "$lib/utils";
  import Divider from "../../containers/divider/Divider.svelte";
  import VStack from "../../containers/stack/VStack.svelte";
  import Body from "../../typography/body/Body.svelte";
  import Headline from "../../typography/headline/Headline.svelte";
  import Card from "../Card.svelte";

  const {
    event,
    deactivate = false,
  }: { event: EventSmall; deactivate?: boolean } = $props();

  const videoCallService = event.location
    ? getVideoCallService(event.location)
    : null;
</script>

<Card href="{page.params.day}/{event.id}">
  <VStack class="justify-start">
    <Headline class={event.status === "cancelled" ? "line-through" : ""}>
      {page.params.role === "t" ? event.title : "Занятие"}
    </Headline>
    {#if event.location}
      <Divider />
      {#if videoCallService}
        <Body>{videoCallService}</Body>
      {:else}
        <Body>
          {event.location}
        </Body>
      {/if}
    {/if}
  </VStack>
  <Headline>
    {formatEventTime(event.dtstartTime, event.dtendTime ?? "")}
  </Headline>
</Card>
