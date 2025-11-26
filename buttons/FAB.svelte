<script lang="ts">
  import clsx from "clsx";
  import { fab } from "./theme";
  import type { FABProps } from "./types";
  import Icon from "../icon/Icon.svelte";
  import FABMenu from "./FABMenu.svelte";
  import ButtonIcon from "./ButtonIcon.svelte";

  let {
    children,
    color = "primary",
    disabled,
    formaction,
    size = "regular",
    config = "primary",
    iconProps,
    label,
    expanded = false,
    class: className,
    withMenu,
    ...restProps
  }: FABProps = $props();

  const {
    base,
    icon,
    label: labelClass,
  } = $derived(fab({ size, config, expanded }));
  let btnCls = $derived(
    base({
      class: clsx(className),
    }),
  );

  let showMenu = $state(false);

  function handleClick(e: any) {
    if (withMenu) {
      e.preventDefault();
      showMenu = true;
      return;
    } else if (restProps.onclick) {
      restProps.onclick(e);
    }
  }
</script>

{#if restProps.href !== undefined}
  <a {...restProps} class={btnCls}>
    <Icon {...iconProps} class={icon()} />
    {#if expanded}
      <p class={labelClass()}>
        {label}
      </p>
    {/if}
  </a>
{:else}
  <div class="relative">
    {#if withMenu && showMenu}
      <FABMenu>
        {@render children?.()}
      </FABMenu>
      <ButtonIcon
        variant="filled"
        class="shadow-elevation-3"
        iconProps={{ name: "close" }}
        onclick={() => (showMenu = !showMenu)}
      />
    {:else}
      <button {...restProps} class={btnCls} onclick={(e) => handleClick(e)}>
        <Icon {...iconProps} class={icon()} />
        {#if expanded}
          <p class={labelClass()}>
            {label}
          </p>
        {/if}
      </button>
    {/if}
  </div>
{/if}
