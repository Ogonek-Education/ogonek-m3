<script lang="ts">
  import { clearNotification } from "$lib/stores";
  import { fly } from "svelte/transition";
  import { P, snackbar, type SnackBarProps } from "$lib/components/library";
  import Icon from "../icon/Icon.svelte";

  let {
    message,
    fixed = true,
    label,
    callback,
    showClose,
    ...restProps
  }: SnackBarProps = $props();

  $effect(() => {
    if (!fixed) return;
    if (!message) return;
    const t = setTimeout(() => {
      message = undefined;
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
    in:fly={{ x: -8, duration: 160 }}
    out:fly={{ x: 8, duration: 140 }}
    {...restProps}
  >
    <p class={supportingText()}>{message}</p>

    <div class={actionWrapper()}>
      {#if label}
        <button class={labelCls()} onclick={callback}>{label}</button>
      {/if}

      {#if showClose}
        <button
          onclick={clearNotification}
          aria-label="Dismiss snackbar"
          data-cy="notification-dismiss"
        >
          <Icon class={icon()} name="close" />
        </button>
      {/if}
    </div>
  </div>
{/if}
