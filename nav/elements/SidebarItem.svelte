<script lang="ts">
  import { page } from "$app/state";
  import { NotificationBadge } from "$lib/components";
  import { Heading } from "$lib/components/library";
  import { Icon as LucideIcon, SquareArrowUpRight } from "@lucide/svelte";
  import clsx from "clsx";

  let {
    href = "/",
    name,
    external = false,
    badge = 0,
    disabled = false,
    class: className,
    Icon,
    ...rest
  }: {
    href: string;
    name: string;
    external?: boolean;
    badge?: number;
    Icon: typeof LucideIcon;
    class?: string;
    disabled?: boolean;
    [key: string]: unknown;
  } = $props();

  const target = $derived(external ? "_blank" : undefined);
  const rel = $derived(external ? "noopener noreferrer" : undefined);
  const isActive = $derived(
    page.url.pathname === href ||
      (href !== "/" && page.url.pathname.startsWith(href)),
  );
</script>

<a
  {href}
  {target}
  {rel}
  {...rest}
  class={clsx(
    "group m-default gap-default group padding-default relative z-30 flex items-center rounded-2xl transition-all active:scale-[99%]",
    isActive
      ? " text-accent bg-bg-secondary border-primary"
      : "text-text border-transient",
    className,
  )}
  class:pointer-events-none={disabled}
  aria-disabled={disabled}
  data-cy={`sidebar-${name}`}
>
  <Icon
    class="group-hover:text-text-secondary transition-colors {isActive
      ? 'text-text-secondary'
      : 'text-text-tertiary'}"
  />
  <div class="flex min-w-0 flex-1 items-center justify-between">
    <Heading tag="h4" class={isActive ? "text-accent" : "text-text-secondary"}>
      {name}
    </Heading>

    <NotificationBadge {badge} />

    {#if external}
      <div
        class="ml-2 flex size-4 items-center justify-center opacity-60 hover:opacity-100"
      >
        <SquareArrowUpRight />
      </div>
    {/if}
  </div>
</a>
