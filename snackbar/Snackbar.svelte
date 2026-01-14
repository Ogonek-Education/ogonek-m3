<script lang="ts">
  import { fade } from "svelte/transition";
  import { snackbar, type SnackBarProps } from "$lib/components/library";
  import Icon from "../utils/icon/Icon.svelte";
  import { notificationStore } from "$lib/stores";

  let {
    message,
    fixed = true,
    static: isStatic = false,
    label,
    callback,
    showClose = true,
    ...restProps
  }: SnackBarProps = $props();

  let dismissed = $state(false);

  $effect(() => {
    if (!message) return;
    if (isStatic) return;
    const t = setTimeout(() => {
      dismissed = true;
      notificationStore.set("");
    }, 5000);
    return () => clearTimeout(t);
  });

  $effect(() => {
    if (!message) {
      dismissed = false;
      return;
    }
    dismissed = false;
  });

  const {
    base,
    icon,
    label: labelCls,
    supportingText,
    actionWrapper,
  } = $derived(snackbar({ fixed }));
</script>

{#if message && !dismissed}
  <div
    class={base()}
    transition:fade={{ duration: 200 }}
    data-cy="notification-snackbar"
    {...restProps}
  >
    {#if typeof message === "string"}
      <p class={supportingText()}>{message}</p>
    {:else}
      <p class={supportingText()}>
        {@render message()}
      </p>
    {/if}

    <div class={actionWrapper()}>
      {#if label}
        <button class={labelCls()} onclick={callback}>{label}</button>
      {/if}

      {#if showClose}
        <button
          onclick={() => {
            dismissed = true;
            notificationStore.set("");
          }}
          aria-label="Dismiss snackbar"
          data-cy="notification-dismiss"
        >
          <Icon class={icon()} name="close" />
        </button>
      {/if}
    </div>
  </div>
{/if}
