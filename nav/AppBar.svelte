<script lang="ts">
  import type { Snippet } from "svelte";
  import { page } from "$app/state";
  import { breadNameStore } from "$lib/stores";
  import Breadcrumb from "./breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "./breadcrumb/BreadcrumbItem.svelte";
  import type { BreadcrumbSegment, NavPage } from "./types";
  import { Headline } from "../typography";
  import { clickOutside } from "$lib/actions";

  let {
    children,
    isApp = false,
  }: {
    children?: Snippet;
    isApp?: boolean;
  } = $props();

  let showModal = $state(false);

  const navLabels: Record<NavPage, string> = {
    dashboard: "Главная",
    tasks: "Задания",
    students: "Студенты",
    calendar: "Расписание",
    settings: "Настройки",
    flashcards: "Карточки",
    lessons: "Занятия",
    legal: "Документы",
    contact: "Контакт",
    why: "Мотивация",
  } as const;

  const { role } = $derived(page.params);

  const breadcrumbs: BreadcrumbSegment[] = $derived.by(() => {
    const segments = page.url.pathname.split("/").filter(Boolean);

    return segments
      .filter(
        (seg) =>
          seg !== "t" && seg !== "s" && seg !== "dashboard" && seg in navLabels,
      )
      .map((seg) => ({
        segment: seg,
        label: navLabels[seg as NavPage],
        href: role ? `/${role}/${seg}` : `/${seg}`,
      }));
  });

  let scrollY = $state(0);
</script>

<svelte:window bind:scrollY />

<nav
  class="bg-bg-primary sticky top-0 z-40 w-full justify-between px-5 pb-1 md:hidden {scrollY >
  10
    ? 'border-border-primary border-b-2'
    : ''}"
>
  <div class="flex flex-col items-center gap-1">
    {#if isApp}
      <div class="grid w-full grid-cols-3 items-end justify-between">
        <button
          class="max-w-max active:scale-95"
          onclick={() => (showModal = !showModal)}
          data-cy="mobile-nav-toggle">menu icon</button
        >
        <a href={`/${role}/dashboard`}>
          <Headline class="text-center font-serif">Ogonëk</Headline>
        </a>
        <a
          href={`/${role}/settings/account`}
          class="max-w-max place-self-end active:scale-95"
        >
          user round icon
        </a>
      </div>
    {:else}
      <a href="/">
        <Headline class="text-center font-serif">Ogonëk</Headline>
      </a>
    {/if}
    <Breadcrumb>
      <BreadcrumbItem href={role ? `/${role}/dashboard` : `/`} home
        >Главная</BreadcrumbItem
      >
      {#each breadcrumbs as crumb}
        <BreadcrumbItem href={crumb.href}>{crumb.label}</BreadcrumbItem>
      {/each}
      {#if $breadNameStore}
        <BreadcrumbItem href={$breadNameStore.href}
          >{$breadNameStore.label}</BreadcrumbItem
        >
      {/if}
    </Breadcrumb>
  </div>
</nav>

{#if showModal}
  <div class="md:hidden">
    <div
      class="flex flex-col overflow-auto"
      use:clickOutside={() => (showModal = false)}
      onclick={() => {
        showModal = false;
      }}
      data-cy="mobile-nav-overlay"
      role="menu"
    >
      {@render children?.()}
    </div>
  </div>
{/if}
