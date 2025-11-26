<script>
  import { Button } from "..";
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
</script>

{#if !$readOnly}
  <Button aria-label="Add" type="submit">{texts.crud.create}</Button>
{/if}
