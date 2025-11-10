<script lang="ts">
  import { Button } from "..";
  import texts from "$lib/texts";
  import { Heading } from "../../typography";

  const { href } = $props();
</script>

<Button
  color="prominent"
  data-cy="edit-button"
  type="submit"
  aria-label="Edit"
  {href}><Heading tag="h3">{texts.crud.edit}</Heading></Button
>
