<script lang="ts">
  import { notification, clearNotification } from "$lib/stores";
  import { fly } from "svelte/transition";
  import { Check, X, Ban, CircleAlert } from "@lucide/svelte";
  import { onDestroy } from "svelte";
  import { Heading, P } from "$lib/components/library";

  let timeout: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    if ($notification.message) {
      if (timeout) clearTimeout(timeout);
      timeout = setTimeout(() => clearNotification(), 3000);
    }
  });

  onDestroy(() => {
    if (timeout) clearTimeout(timeout);
  });

  function handleDismiss() {
    clearNotification();
  }
</script>

{#if $notification.message}
  <div
    in:fly={{ x: -10 }}
    out:fly={{ x: 10 }}
    class="bg-bg-primary border-primary gap-default padding-default fixed top-5 left-1/2 z-50 flex max-w-sm -translate-x-1/2 items-center
"
  >
    {#if $notification.type === "success"}
      <Check class="text-green size-5" />
    {:else if $notification.type === "error"}
      <Ban class="text-red size-5" />
    {:else}
      <CircleAlert class="text-yellow size-5" />
    {/if}

    <P>
      {$notification.message}
    </P>

    <button
      onclick={handleDismiss}
      class="bg-clickable rounded-full p-1"
      aria-label="Dismiss notification"
    >
      <X class="text-text size-4 rounded-full" />
    </button>
  </div>
{/if}
