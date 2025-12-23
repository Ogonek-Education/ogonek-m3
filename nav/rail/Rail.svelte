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
<div class={`${scrim()} rail-scrim`} data-expanded={!$collapseStore}></div>
<div
  class={`${base()} rail-base`}
  data-expanded={!$collapseStore}
  use:clickOutside={() => {
    if (!$collapseStore) collapse();
  }}
>
  {#if expandable}
    <ButtonIcon
      type="button"
      iconProps={{ name: `${$collapseStore ? "menu" : "menu_open"}` }}
      class={$collapseStore ? "cursor-e-resize" : "cursor-w-resize"}
      onclick={() => collapse()}
    />
  {/if}
  {@render fab?.()}

  <div class={`${items()} rail-items`}>
    {@render children?.()}
  </div>
</div>

<style>
  .rail-base {
    transition:
      width 500ms var(--md-sys-motion-timing-function-emphasized-decel),
      padding 500ms var(--md-sys-motion-timing-function-emphasized-decel),
      background-color 300ms
        var(--md-sys-motion-timing-function-emphasized-decel),
      border-radius 300ms var(--md-sys-motion-timing-function-emphasized-decel),
      box-shadow 300ms var(--md-sys-motion-timing-function-emphasized-decel);
  }

  .rail-items {
    transition:
      opacity 200ms var(--md-sys-motion-timing-function-emphasized-decel),
      transform 500ms var(--md-sys-motion-timing-function-emphasized-decel);
  }

  .rail-base[data-expanded="true"] .rail-items {
    opacity: 1;
    transform: translateX(0);
  }

  .rail-base[data-expanded="false"] .rail-items {
    opacity: 1;
    transform: translateX(0);
  }

  .rail-scrim {
    opacity: 0;
    pointer-events: none;
    transition: opacity 300ms
      var(--md-sys-motion-timing-function-emphasized-decel);
  }

  .rail-scrim[data-expanded="true"] {
    opacity: 1;
    pointer-events: auto;
  }
</style>
