<script lang="ts">
  import { Button } from "..";
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";

  const { href } = $props();
</script>

{#if !$readOnly}
  <Button
    color="prominent"
    data-cy="edit-button"
    type="submit"
    aria-label="Edit"
    {href}>{texts.crud.edit}</Button
  >
{/if}
