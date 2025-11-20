<script lang="ts">
  import { notificationStore, clearNotification } from "$lib/stores";
  import { fly } from "svelte/transition";
  import { X } from "@lucide/svelte";
  import { P } from "$lib/components/library";
  import { notificationTheme } from "./theme";

  // Reactive auto-dismiss. Kein manuelles Timeout-Tracking.
  $effect(() => {
    const msg = $notificationStore.message;
    if (!msg) return;
    const t = setTimeout(clearNotification, 3000);
    return () => clearTimeout(t);
  });

  const { base, button, icon } = $derived(
    notificationTheme({ type: $notificationStore.type }),
  );
</script>

<div
  class={`${base()} ${$notificationStore.message ? "opacity-100" : "pointer-events-none opacity-0"}`}
  in:fly={{ x: -8, duration: 160 }}
  out:fly={{ x: 8, duration: 140 }}
>
  <P>{$notificationStore.message}</P>

  <button
    onclick={clearNotification}
    class={button()}
    aria-label="Dismiss notification"
    data-cy="notification-dismiss"
  >
    <X class={icon()} />
  </button>
</div>
