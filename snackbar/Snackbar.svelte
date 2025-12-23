<script lang="ts">
  import { fade } from "svelte/transition";
  import { snackbar, type SnackBarProps } from "$lib/components/library";
  import Icon from "../utils/icon/Icon.svelte";
  import { notificationStore } from "$lib/stores";

  let {
    message,
    fixed = true,
    label,
    callback,
    showClose = true,
    ...restProps
  }: SnackBarProps = $props();

  $effect(() => {
    if (!fixed) return;
    if (!message) return;
    const t = setTimeout(() => {
      notificationStore.set("");
    }, 3000);
    return () => clearTimeout(t);
  });

  const {
    base,
    icon,
    label: labelCls,
    supportingText,
    actionWrapper,
  } = $derived(snackbar({ fixed }));
</script>

{#if message}
  <div
    class={base()}
    transition:fade={{ duration: 200 }}
    data-cy="notification-snackbar"
    {...restProps}
  >
    <p class={supportingText()}>{message}</p>

    <div class={actionWrapper()}>
      {#if label}
        <button class={labelCls()} onclick={callback}>{label}</button>
      {/if}

      {#if showClose}
        <button
          onclick={() => notificationStore.set("")}
          aria-label="Dismiss snackbar"
          data-cy="notification-dismiss"
        >
          <Icon class={icon()} name="close" />
        </button>
      {/if}
    </div>
  </div>
{/if}
