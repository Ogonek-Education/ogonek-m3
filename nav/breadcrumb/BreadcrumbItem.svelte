<script lang="ts">
  import clsx from "clsx";
  import { breadcrumbItem } from "./theme";
  import type { BreadcrumbItemProps } from "$lib";

  let {
    children,
    home = false,
    href,
    linkClass,
    spanClass,
    homeClass,
    class: className,
    classes,
    ...restProps
  }: BreadcrumbItemProps = $props();

  const styling = $derived(classes ?? {});

  const { base, separator } = $derived(
    breadcrumbItem({
      home,
      hasHref: !!href,
    }),
  );
</script>

<li {...restProps} class={base({ class: clsx(className) })}>
  {#if home}
    <a class={base({ home: true, class: clsx(homeClass) })} {href}>
      {@render children()}
    </a>
  {:else}
    chevron right

    {#if href}
      <a
        class={base({
          home: false,
          hasHref: true,
          class: clsx(linkClass),
        })}
        {href}
      >
        {@render children()}
      </a>
    {:else}
      <span
        class={base({
          home: false,
          hasHref: false,
          class: clsx(spanClass),
        })}
      >
        {@render children()}
      </span>
    {/if}
  {/if}
</li>
