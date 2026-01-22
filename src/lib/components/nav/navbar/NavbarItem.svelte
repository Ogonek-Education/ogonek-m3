<script lang="ts">
  import { page } from "$app/state";
  import clsx from "clsx";
  import Icon from "../../utils/icon/Icon.svelte";
  import { navitem } from "./theme.js";
  import type { NavItemProps } from "./types.js";
  import Badge from "../../badge/Badge.svelte";
  import Layer from "../../utils/Layer.svelte";

  const {
    iconProps,
    label,
    href,
    badge,
    class: className,
    ...rest
  }: NavItemProps = $props();

  const active = $derived(
    page.url.pathname === href ||
      (href !== "/" && page.url.pathname.startsWith(href)),
  );
  const {
    base,
    content,
    icon,
    iconContainer,
    label: labelClass,
  } = $derived(navitem({ active }));
</script>

<a {href} {...rest} class={clsx(base(), className)} data-cy={`rail-${label}`}>
  <div class={content()}>
    <div class={iconContainer()}>
      <Icon
        {...iconProps}
        class={icon()}
        wght={active ? 600 : 400}
        fill={active ? 1 : 0}
      />
      {#if badge}
        <Badge size={badge === -1 ? "sm" : "lg"} number={badge}></Badge>
      {/if}
      <Layer />
    </div>
    <p class={labelClass()}>
      {label}
    </p>
  </div>
</a>
