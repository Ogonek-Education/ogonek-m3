<script lang="ts">
  import { collapseStore, readOnly } from "$lib/stores";
  import { quintOut } from "svelte/easing";
  import { fly } from "svelte/transition";
  import { Heading } from "../../typography";
  import Button from "../../buttons/Button.svelte";
  import { FAB, HStack, Icon, rail, type RailProps } from "$lib/components";
  import { Menu, Plus, SquareChevronLeft } from "@lucide/svelte";
  let { children }: RailProps = $props();

  function collapse() {
    collapseStore.set(!$collapseStore);
  }

  const { base, items } = $derived(rail({ expanded: !$collapseStore }));
</script>

<div class={base()}>
  <button onclick={() => collapse()}>
    {#if $collapseStore}
      <Icon name="menu" />{:else}<Icon name="menu_open" />{/if}
  </button>
  <FAB label="Добавить" expanded={!$collapseStore} Icon={Plus}></FAB>
  <div class={items()} in:fly={{ y: 20, duration: 400, easing: quintOut }}>
    {@render children?.()}
  </div>
  {#if $readOnly}
    <HStack class="padding-default mt-auto">
      <Heading tag="h2" class="self-center">Режим чтения</Heading>
      <Button href="/pricing">Купить подписку</Button>
    </HStack>
  {/if}
</div>
