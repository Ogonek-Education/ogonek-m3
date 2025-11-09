<script lang="ts">
  import { Button } from "..";
  import texts from "$lib/texts";
  import { Shredder } from "@lucide/svelte";
</script>

<Button
  withModal={true}
  Icon={Shredder}
  formaction="?/delete"
  tooltipContent={texts.crud.delete}
  color="red"
></Button>
