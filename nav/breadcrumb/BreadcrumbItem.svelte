<script lang="ts">
  import clsx from "clsx";
  import { breadcrumbItem } from "./theme";
  import type { BreadcrumbItemProps } from "$lib";
  import { ChevronRight } from "@lucide/svelte";

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
    <ChevronRight class={separator({ class: clsx(styling.separator) })} />

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
