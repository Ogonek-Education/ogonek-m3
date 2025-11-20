<script>
  import { Plus } from "@lucide/svelte";
  import { Button } from "..";
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
</script>

{#if !$readOnly}
  <Button
    aria-label="Add"
    tooltipContent={texts.crud.create}
    Icon={Plus}
    type="submit"
  ></Button>
{/if}
