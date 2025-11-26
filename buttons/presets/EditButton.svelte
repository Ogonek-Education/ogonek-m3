<script lang="ts">
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
  import ButtonIcon from "../ButtonIcon.svelte";

  const { href } = $props();
</script>

{#if !$readOnly}
  <ButtonIcon
    variant="tonal"
    iconProps={{ name: "edit" }}
    data-cy="edit-button"
    type="submit"
    aria-label="Edit"
    {href}>{texts.crud.edit}</ButtonIcon
  >
{/if}
