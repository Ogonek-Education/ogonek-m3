<script lang="ts">
  import clsx from "clsx";
  import { fab } from "./theme";
  import type { FABProps } from "./types";
  import Icon from "../utils/icon/Icon.svelte";
  import FABMenu from "./FABMenu.svelte";
  import ButtonIcon from "./ButtonIcon.svelte";
  import Layer from "../utils/Layer.svelte";
  import { clickOutside } from "$lib/actions";

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
    if (disabled) {
      e.preventDefault();
      return;
    }

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
  <a
    {...restProps}
    class={btnCls}
    aria-disabled={disabled}
    onclick={(event) => disabled && event.preventDefault()}
  >
    <Icon {...iconProps} class={icon()} />
    <Layer />
    {#if expanded}
      <p class={labelClass()}>
        {label}
      </p>
    {/if}
  </a>
{:else}
  <div class="relative" use:clickOutside={() => (showMenu = false)}>
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
      <button
        {...restProps}
        class={btnCls}
        onclick={(e) => handleClick(e)}
        {disabled}
      >
        <Icon {...iconProps} class={icon()} />
        <Layer />
        {#if expanded}
          <p class={labelClass()}>
            {label}
          </p>
        {/if}
      </button>
    {/if}
  </div>
{/if}
