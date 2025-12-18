<script lang="ts">
  import texts from "$lib/texts";
  import Dialogue from "../../containers/dialogue/Dialogue.svelte";
  import ButtonIcon from "../ButtonIcon.svelte";

  const {
    variant = "tonal",
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
  } = $props();

  let modal = $state(false);
</script>

<ButtonIcon
  iconProps={{ name: "delete" }}
  tooltipContent={texts.crud.delete}
  data-cy="delete-button"
  type="button"
  onclick={() => (modal = true)}
  {variant}
></ButtonIcon>

{#if modal}
  <Dialogue
    supportingText="Это действие необратимо"
    headline="Удаление"
    toggle={() => (modal = false)}
    confirmAction="?/delete"
    confirmText="Удалить"
  />
{/if}
