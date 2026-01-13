<script lang="ts">
  import { page } from "$app/state";
  import { ButtonIcon } from "$lib/components";
  import { tutorial } from "$lib/stores";
  import type { Role } from "$lib/types";
  import { resolveTutorialKey } from "$lib/utils/tutorial";

  const tutorialKey = $derived.by(
    () =>
      resolveTutorialKey({
        pathname: page.url.pathname,
        params: page.params,
      }) ?? section,
  );

  const segments = $derived(page.url.pathname.split("/").filter(Boolean));
  const [_role, section, _maybeId] = $derived(segments);
</script>

{#if Date.now() - new Date(page?.data?.user?.joined).getTime() < 7 * 24 * 60 * 60 * 1000}
  <ButtonIcon
    triggerClass="absolute bottom-20"
    tooltipContent="Обучение"
    iconProps={{ name: "tips_and_updates" }}
    onclick={() => {
      if (tutorialKey) {
        tutorial.start(tutorialKey, page.params.role as Role);
      }
    }}
  ></ButtonIcon>
{/if}
