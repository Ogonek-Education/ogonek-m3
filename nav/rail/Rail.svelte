<script lang="ts">
  import { collapseStore, readOnly } from "$lib/stores";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { Headline } from "../../typography";
  import Button from "../../buttons/Button.svelte";
  import {
    ButtonIcon,
    FAB,
    FABMenuItem,
    HStack,
    rail,
    type RailProps,
  } from "$lib/components";
  import { page } from "$app/state";
  import { enhance } from "$app/forms";
  import { clickOutside } from "$lib/actions";
  let { children }: RailProps = $props();

  function collapse() {
    collapseStore.set(!$collapseStore);
  }

  const { base, items, ghost } = $derived(rail({ expanded: !$collapseStore }));
</script>

<div class={ghost()}></div>

<div
  class={base()}
  use:clickOutside={() => {
    if (!$collapseStore) collapse();
  }}
>
  <ButtonIcon
    iconProps={{ name: `${$collapseStore ? "menu" : "menu_open"}` }}
    onclick={() => collapse()}
  />
  {#if page.params.role === "t"}
    <FAB
      withMenu
      label="Добавить"
      expanded={!$collapseStore}
      iconProps={{ name: "add" }}
    >
      <form action="/{page.params.role}/tasks?/new" use:enhance method="POST">
        <FABMenuItem iconProps={{ name: "assignment" }}>Задание</FABMenuItem>
      </form>
      <form action="/{page.params.role}/lessons?/new" use:enhance method="POST">
        <FABMenuItem iconProps={{ name: "book" }}>Занятие</FABMenuItem>
      </form>
    </FAB>
  {/if}
  <div class={items()}>
    {@render children?.()}
  </div>
  {#if $readOnly}
    <HStack class="padding-default mt-auto">
      <Headline class="self-center">Режим чтения</Headline>
      <Button href="/pricing">Купить подписку</Button>
    </HStack>
  {/if}
</div>
