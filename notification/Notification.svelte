<script lang="ts">
  import { clearNotification, notificationStore } from "$lib/stores";
  import { fly } from "svelte/transition";
  import { X } from "@lucide/svelte";
  import { onDestroy } from "svelte";
  import { P } from "$lib/components/library";
  import { notificationTheme } from "./theme";

  let timeout: ReturnType<typeof setTimeout> | null = null;

  $effect(() => {
    if ($notificationStore.message) {
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

  const { base, button, icon } = $derived(
    notificationTheme({ type: $notificationStore.type }),
  );
</script>

{#if $notificationStore.message}
  <div in:fly={{ x: -10 }} out:fly={{ x: 10 }} class={base()}>
    <P>
      {$notificationStore.message}
    </P>

    <button
      onclick={handleDismiss}
      class={button()}
      aria-label="Dismiss notification"
    >
      <X class={icon()} />
    </button>
  </div>
{/if}
