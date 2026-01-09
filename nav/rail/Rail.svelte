<script lang="ts">
  import { collapseStore, tutorial } from "$lib/stores";
  import { ButtonIcon, rail, type RailProps } from "$lib/components";
  import { clickOutside } from "$lib/actions";
  import { resolveTutorialKey } from "$lib/utils/tutorial";
  import clsx from "clsx";
  import { page } from "$app/state";
  import type { Role } from "$lib/types";

  let {
    children,
    expandable = true,
    showHelp = false,
    fab,
    class: className,
  }: RailProps = $props();

  function collapse() {
    collapseStore.set(!$collapseStore);
  }

  const { base, items, ghost, scrim } = $derived(
    rail({ expanded: !$collapseStore }),
  );

  const segments = $derived(page.url.pathname.split("/").filter(Boolean));
  const [_role, section, _maybeId] = $derived(segments);
  const tutorialKey = $derived.by(
    () =>
      resolveTutorialKey({ pathname: page.url.pathname, params: page.params }) ??
      section,
  );
</script>

<div class={ghost()}></div>
<div class={`${scrim()} rail-scrim`} data-expanded={!$collapseStore}></div>
<div
  class={`${base({ class: clsx(className) })} rail-base`}
  data-expanded={!$collapseStore}
  use:clickOutside={() => {
    if (!$collapseStore) collapse();
  }}
>
  {#if expandable}
    <ButtonIcon
      type="button"
      tooltipContent={$collapseStore ? "Открыть" : "Закрыть"}
      iconProps={{ name: `${$collapseStore ? "menu" : "menu_open"}` }}
      class={clsx($collapseStore ? "cursor-e-resize" : "cursor-w-resize", "")}
      onclick={() => collapse()}
    />
  {/if}
  {@render fab?.()}

  <div class={`${items()} rail-items`}>
    {@render children?.()}
  </div>
  {#if showHelp}
    <ButtonIcon
      triggerClass="mt-46"
      tooltipContent="Обучение"
      iconProps={{ name: "question_mark" }}
      onclick={() => {
        if (tutorialKey) {
          tutorial.start(tutorialKey, page.params.role as Role);
        }
      }}
    ></ButtonIcon>
  {/if}
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
