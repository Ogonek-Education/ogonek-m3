<script lang="ts">
  import { page } from "$app/state";
  import clsx from "clsx";
  import type { RailItemProps } from "./types";
  import { railElement } from "./theme";
  import { collapseStore } from "$lib/stores";
  import Icon from "../../utils/icon/Icon.svelte";
  import Badge from "../../badge/Badge.svelte";
  import { Layer } from "../../utils";

  let {
    href = "/",
    name,
    external = false,
    badge = 0,
    class: className,
    iconProps,
    ...rest
  }: RailItemProps = $props();

  const target = $derived(external ? "_blank" : undefined);
  const rel = $derived(external ? "noopener noreferrer" : undefined);
  const isActive = $derived(
    page.url.pathname === href ||
      (href !== "/" && page.url.pathname.startsWith(href)),
  );
  const {
    base,
    content,
    icon,
    iconContainer,
    label: labelClass,
  } = $derived(railElement({ active: isActive, expanded: !$collapseStore }));
</script>

<a {href} {target} {rel} {...rest} class={clsx(base(), className)}>
  <div class={content()}>
    <div class={iconContainer()}>
      <Icon
        {...iconProps}
        class={icon()}
        wght={isActive ? 600 : 400}
        fill={isActive ? 1 : 0}
      />
      {#if badge}
        <Badge size={badge === -1 ? "sm" : "lg"} number={badge}></Badge>
      {/if}
      <Layer />
    </div>
    <p class={labelClass()}>
      {name}
    </p>
  </div>
</a>
