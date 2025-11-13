<script lang="ts">
  import { CircleUserRound, Menu } from "@lucide/svelte";
  import type { Snippet } from "svelte";
  import { Button } from "../buttons";
  import { page } from "$app/state";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import Breadcrumb from "./breadcrumb/Breadcrumb.svelte";
  import BreadcrumbItem from "./breadcrumb/BreadcrumbItem.svelte";
  import type { NavPage } from "./types";
  import { Heading } from "../typography";

  let {
    children,
  }: {
    children?: Snippet;
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
  } as const;

  const breadcrumbs = $derived.by(() => {
    const segments = page.url.pathname.split("/").filter(Boolean);

    return segments
      .filter(
        (seg) =>
          seg !== "t" && seg !== "s" && seg !== "dashboard" && seg in navLabels,
      )
      .map((seg) => ({
        segment: seg,
        label: navLabels[seg as NavPage],
        href: `/${seg}`,
      }));
  });

  let scrollY = $state(0);

  const { role } = $derived(page.params);
</script>

<svelte:window bind:scrollY />

<nav
  class="bg-bg-primary sticky top-0 z-40 w-full justify-between px-5 pb-1 md:hidden {scrollY >
  10
    ? 'border-border-primary border-b-2'
    : ''}"
>
  <div class="flex flex-col items-center gap-1">
    <div class="grid w-full grid-cols-3 items-end justify-between">
      <button
        class="max-w-max active:scale-95"
        onclick={() => (showModal = !showModal)}><Menu /></button
      >
      <Heading class="text-center font-serif">Ogonëk</Heading>
      <a
        href={`/${role}/settings/account`}
        class="max-w-max place-self-end active:scale-95"
      >
        <CircleUserRound />
      </a>
    </div>
    <Breadcrumb>
      <BreadcrumbItem href={`/${role}/dashboard`} home>Главная</BreadcrumbItem>
      {#each breadcrumbs as crumb}
        <BreadcrumbItem href={crumb.href}>{crumb.label}</BreadcrumbItem>
      {/each}
    </Breadcrumb>
  </div>
</nav>

{#if showModal}
  <ul
    class="flex flex-col overflow-auto md:hidden"
    in:fly={{ x: 20, duration: 100, easing: quintOut }}
  >
    <button
      onclick={() => {
        showModal = false;
      }}
    >
      {@render children?.()}
    </button>
  </ul>
{/if}
