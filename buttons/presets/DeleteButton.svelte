<script lang="ts">
  import texts from "$lib/texts";
  import Dialogue from "../../containers/dialogue/Dialogue.svelte";
  import Button from "../Button.svelte";

  const {
    variant = "error",
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text" | "error";
  } = $props();

  let modal = $state(false);
</script>

<Button
  iconProps={{ name: "delete" }}
  data-cy="delete-button"
  type="button"
  onclick={() => (modal = true)}
  {variant}>{texts.crud.delete}</Button
>

{#if modal}
  <Dialogue
    supportingText="Это действие необратимо"
    headline="Удаление"
    toggle={() => (modal = false)}
    confirmAction="?/delete"
    confirmText="Удалить"
  />
{/if}
