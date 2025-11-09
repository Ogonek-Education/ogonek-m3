<script>
  import { Plus } from "@lucide/svelte";
  import { Button } from ".";
  import texts from "$lib/texts";
</script>

<Button
  ariaLabel="Add"
  content={texts.crud.create}
  Icon={Plus}
  type="submit"
  variant="primary"
></Button>
