<script lang="ts">
  import { Pencil } from "@lucide/svelte";
  import { Button } from "..";
  import texts from "$lib/texts";

  const { href } = $props();
</script>

<Button
  variant="prominent"
  content={texts.crud.edit}
  dataCy="edit-button"
  type="submit"
  ariaLabel="Edit"
  Icon={Pencil}
  {href}
></Button>
