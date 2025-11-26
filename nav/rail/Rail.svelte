<script lang="ts">
  import { collapseStore, readOnly } from "$lib/stores";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { Headline } from "../../typography";
  import Button from "../../buttons/Button.svelte";
  import {
    ButtonIcon,
    FAB,
    HStack,
    rail,
    type RailProps,
  } from "$lib/components";
  let { children }: RailProps = $props();

  function collapse() {
    collapseStore.set(!$collapseStore);
  }

  const { base, items, ghost } = $derived(rail({ expanded: !$collapseStore }));
</script>

<div class={ghost()}></div>
<div class={base()}>
  <ButtonIcon
    iconProps={{ name: `${$collapseStore ? "menu" : "menu_open"}` }}
    onclick={() => collapse()}
  />
  <FAB label="Добавить" expanded={!$collapseStore} iconProps={{ name: "add" }}
  ></FAB>
  <div class={items()} in:fly={{ y: 20, duration: 400, easing: quintOut }}>
    {@render children?.()}
  </div>
  {#if $readOnly}
    <HStack class="padding-default mt-auto">
      <Headline class="self-center">Режим чтения</Headline>
      <Button href="/pricing">Купить подписку</Button>
    </HStack>
  {/if}
</div>
