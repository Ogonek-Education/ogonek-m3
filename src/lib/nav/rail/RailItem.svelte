<script lang="ts">
  import { page } from "$app/state";
  import clsx from "clsx";
  import type { RailItemProps } from "./types.js";
  import { railElement } from "./theme.js";
  import { collapseStore } from "$lib/stores";
  import Icon from "../../utils/icon/Icon.svelte";
  import Badge from "../../badge/Badge.svelte";
  import { Layer } from "../../utils/index.js";

  let {
    href = "/",
    name,
    external = false,
    badge = 0,
    class: className,
    selected,
    disabled,
    iconProps,
    ...rest
  }: RailItemProps = $props();

  const isDisabled = $derived(!!disabled);
  const target = $derived(!isDisabled && external ? "_blank" : undefined);
  const rel = $derived(
    !isDisabled && external ? "noopener noreferrer" : undefined,
  );
  const hrefValue = $derived(isDisabled ? undefined : href);
  const ariaDisabled = $derived(isDisabled ? true : undefined);
  const tabIndex = $derived(isDisabled ? -1 : undefined);
  const isActive = $derived(
    selected ||
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

  function handleClick(event: MouseEvent) {
    if (!isDisabled) return;
    event.preventDefault();
    event.stopPropagation();
  }
</script>

<a
  href={hrefValue}
  {target}
  {rel}
  aria-disabled={ariaDisabled}
  tabindex={tabIndex}
  onclick={handleClick}
  {...rest}
  class={clsx(base(), className)}
>
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
