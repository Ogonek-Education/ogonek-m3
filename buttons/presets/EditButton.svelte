<script lang="ts">
  import { Pencil } from "@lucide/svelte";
  import { Button } from "..";
  import texts from "$lib/texts";

  const { href } = $props();
</script>

<Button
  color="prominent"
  tooltipContent={texts.crud.edit}
  data-cy="edit-button"
  type="submit"
  aria-label="Edit"
  Icon={Pencil}
  {href}
></Button>
