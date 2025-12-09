<script lang="ts">
  import { appbar } from "./theme";
  import type { AppBarProps } from "./types";
  import clsx from "clsx";

  let {
    children,
    title,
    subtitle,
    trailing,
    leading,
    class: className,
    showBack,
    ...rest
  }: AppBarProps = $props();

  let scrollY = $state(0);
  let scrolled = $derived(scrollY > 10);

  const noTrailing = $derived(!trailing);
  const noLeading = $derived(!leading || !showBack);

  const {
    base,
    title: titleCLs,
    textContainer,
    subtitle: subtitleCls,
    leading: leadingCls,
    trailing: trailingCls,
  } = $derived(appbar({ scrolled, noLeading, noTrailing }));
</script>

<svelte:window bind:scrollY />

<nav {...rest} class={base({ class: clsx(className) })}>
  <div class={leadingCls()}>
    {@render leading?.()}
  </div>
  <div class={textContainer()}>
    <h1 class={titleCLs()}>
      {title}
    </h1>
    {#if subtitle}
      <p class={subtitleCls()}>{subtitle}</p>
    {/if}
  </div>
  <div class={trailingCls()}>
    {@render trailing?.()}
  </div>
</nav>
