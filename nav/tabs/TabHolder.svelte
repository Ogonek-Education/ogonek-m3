<script lang="ts">
  import { tabHolder, type TabHolderProps } from "$lib/components";
  import Tab from "./Tab.svelte";

  let {
    secondary = false,
    items,
    tab,
    ...restProps
  }: TabHolderProps = $props();

  const idx = $derived(items.findIndex((i) => i.value === tab));
  const count = $derived(items.length);
  const { base, bar } = $derived(tabHolder());

  /*
  const items: TabProps[] = [
    {
      iconProps: { name: "book" },
      name: "Занятия",
      value: "lessons",
      href: "?tab=lessons",
    },
    {
      iconProps: { name: "assignment" },
      name: "Задания",
      value: "tasks",
      href: "?tab=tasks",
    },
    {
      iconProps: { name: "note_stack" },
      name: "Карточки",
      value: "flashcards",
      href: "?tab=flashcards",
    },
    {
      iconProps: { name: "calendar_month" },
      name: "Календарь",
      value: "calendar",
      href: "?tab=calendar",
    },
  ];
  */
</script>

<div class={base()}>
  <!-- tab items -->
  {#each items as item, i}
    {@const active = tab === item.value}
    <Tab {...item} {active} />
  {/each}

  <!-- sliding highlight bar -->
  <div
    class={bar()}
    style="
      width: calc(100% / {count});
      transform: translateX(calc({idx} * 100%));
    "
  ></div>
</div>
