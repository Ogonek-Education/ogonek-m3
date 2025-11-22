<script lang="ts">
  import { page } from "$app/state";
  import clsx from "clsx";
  import type { RailItemProps } from "./types";
  import { railElement } from "./theme";
  import { collapseStore } from "$lib/stores";
  import Icon from "../../icon/Icon.svelte";

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
    badge: badgeCls,
  } = $derived(railElement({ active: isActive, expanded: !$collapseStore }));
</script>

<a
  {href}
  {target}
  {rel}
  {...rest}
  class={clsx(base(), className)}
  data-cy={`sidebar-${name}`}
>
  <div class={content()}>
    <div class={iconContainer()}>
      <Icon {...iconProps} class={icon()} wght={isActive ? 600 : 400} />
    </div>
    <p class={labelClass()}>
      {name}
    </p>

    {#if badge}
      <div class={badgeCls()}>
        {badge > 99 ? "99+" : badge}
      </div>
    {/if}
  </div>
</a>
