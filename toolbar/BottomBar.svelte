<script lang="ts">
  import { A, Heading } from "$lib/components/library";
  import clsx from "clsx";
  import { sub } from "date-fns";
  import type { Snippet } from "svelte";

  let {
    children,
    title,
    subtitle,
    href,
    class: className,
    headingClass,
  }: {
    children?: Snippet;
    title: string;
    class?: string;
    subtitle?: string;
    href?: string;
    headingClass?: string;
  } = $props();
</script>

<div
  class={clsx(
    "gap-default order-1 grid w-full items-end md:order-2 md:grid-cols-3",
    className,
  )}
>
  <div class={clsx("md:col-span-2", headingClass)}>
    <Heading tag="hero">
      {title}
    </Heading>
    {#if subtitle && !href}
      <Heading tag="h2">
        {subtitle}
      </Heading>
    {:else if subtitle && href}
      <Heading tag="h4">
        <A class="underline" {href}>
          {subtitle}
        </A>
      </Heading>
    {/if}
  </div>
  {@render children?.()}
</div>
