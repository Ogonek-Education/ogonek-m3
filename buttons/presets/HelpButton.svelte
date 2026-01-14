<script lang="ts">
  import { page } from "$app/state";
  import { Button, ButtonIcon } from "$lib/components";
  import { collapseStore, tutorial } from "$lib/stores";
  import type { Role } from "$lib/types";
  import { resolveTutorialKey } from "$lib/utils/tutorial";

  const segments = $derived(page.url.pathname.split("/").filter(Boolean));
  const [_role, section, _maybeId] = $derived(segments);
  const tutorialKey = $derived.by(
    () =>
      resolveTutorialKey({
        pathname: page.url.pathname,
        params: page.params,
      }) ?? section,
  );
</script>

{#if Date.now() - new Date(page?.data?.context?.user?.joined).getTime() < 7 * 24 * 60 * 60 * 1000}
  {#if $collapseStore}
    <ButtonIcon
      tooltipContent="Обучение"
      iconProps={{ name: "tips_and_updates" }}
      onclick={() => {
        if (tutorialKey) {
          tutorial.start(tutorialKey, page.params.role as Role);
        }
      }}
    ></ButtonIcon>
  {:else}
    <Button
      iconProps={{ name: "tips_and_updates" }}
      variant="text"
      onclick={() => {
        if (tutorialKey) {
          tutorial.start(tutorialKey, page.params.role as Role);
        }
      }}
    >
      Обучение
    </Button>
  {/if}
{/if}
