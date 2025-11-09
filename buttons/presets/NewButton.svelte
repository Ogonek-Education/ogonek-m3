<script>
  import { Plus } from "@lucide/svelte";
  import { Button } from "..";
  import texts from "$lib/texts";
</script>

<Button
  aria-label="Add"
  tooltipContent={texts.crud.create}
  Icon={Plus}
  type="submit"
></Button>
