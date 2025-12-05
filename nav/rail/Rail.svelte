<script lang="ts">
  import { collapseStore } from "$lib/stores";
  import { ButtonIcon, rail, type RailProps } from "$lib/components";
  import { clickOutside } from "$lib/actions";
  let { children, expandable = true, fab }: RailProps = $props();

  function collapse() {
    collapseStore.set(!$collapseStore);
  }

  const { base, items, ghost, scrim } = $derived(
    rail({ expanded: !$collapseStore }),
  );
</script>

<div class={ghost()}></div>
<div class={scrim()}></div>
<div
  class={base()}
  use:clickOutside={() => {
    if (!$collapseStore) collapse();
  }}
>
  {#if expandable}
    <ButtonIcon
      type="button"
      iconProps={{ name: `${$collapseStore ? "menu" : "menu_open"}` }}
      onclick={() => collapse()}
    />
  {/if}
  {@render fab?.()}

  <div class={items()}>
    {@render children?.()}
  </div>
</div>
