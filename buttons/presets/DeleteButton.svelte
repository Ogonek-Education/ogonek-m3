<script lang="ts">
  import texts from "$lib/texts";
  import Dialogue from "../../containers/dialogue/Dialogue.svelte";
  import Button from "../Button.svelte";
  import ButtonIcon from "../ButtonIcon.svelte";

  const {
    variant = "error",
    mobile = false,
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text" | "error";
    mobile?: boolean;
  } = $props();

  let modal = $state(false);
</script>

{#if mobile}
  <ButtonIcon
    iconProps={{ name: "delete" }}
    data-cy="delete-button"
    type="button"
    aria-label={texts.crud.delete}
    onclick={() => (modal = true)}
    {variant}
  />
{:else}
  <Button
    iconProps={{ name: "delete" }}
    data-cy="delete-button"
    type="button"
    onclick={() => (modal = true)}
    {variant}>{texts.crud.delete}</Button
  >
{/if}

{#if modal}
  <Dialogue
    supportingText="Это действие необратимо"
    headline="Удаление"
    toggle={() => (modal = false)}
    confirmAction="?/delete"
    confirmText="Удалить"
  />
{/if}
