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
  import { clickOutside } from "$lib/actions";
  let { children, expandable = true, fab }: RailProps = $props();

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
  {#if expandable}
    <ButtonIcon
      iconProps={{ name: `${$collapseStore ? "menu" : "menu_open"}` }}
      onclick={() => collapse()}
    />
  {/if}
  {@render fab?.()}

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
