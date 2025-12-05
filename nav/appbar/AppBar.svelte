<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import { appbar } from "./theme";
  import type { AppBarProps } from "./types";
  import clsx from "clsx";
  import ButtonIcon from "../../buttons/ButtonIcon.svelte";

  let {
    children,
    title,
    subtitle,
    leadingClick,
    leadingIcon,
    trailingClick,
    trailingIcon,
    class: className,
    ...rest
  }: AppBarProps = $props();

  let scrollY = $state(0);
  let scrolled = $derived(scrollY > 10);

  const {
    base,
    title: titleCLs,
    subtitle: subtitleCls,
    leading,
    trailing,
  } = $derived(appbar({ scrolled }));
</script>

<svelte:window bind:scrollY />

<nav {...rest} class={base({ class: clsx(className) })}>
  {#if leadingIcon}
    <ButtonIcon class={leading()} iconProps={leadingIcon}></ButtonIcon>
  {/if}
  <div class="flex grow flex-col items-start gap-0.5">
    <h1 class={titleCLs()}>
      {title}
    </h1>
    {#if subtitle}
      <p class={subtitleCls()}>{subtitle}</p>
    {/if}
  </div>

  {#if trailingIcon}
    <ButtonIcon class={trailing()} iconProps={trailingIcon}></ButtonIcon>
  {/if}
</nav>
