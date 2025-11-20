<script lang="ts">
  import { Button } from "..";
  import texts from "$lib/texts";
  import { Heading } from "../../typography";
  import { readOnly } from "$lib/stores";

  const { href } = $props();
</script>

{#if !$readOnly}
  <Button
    color="prominent"
    data-cy="edit-button"
    type="submit"
    aria-label="Edit"
    {href}><Heading tag="h3">{texts.crud.edit}</Heading></Button
  >
{/if}
