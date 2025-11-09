<script lang="ts">
  import { Button } from "..";
  import texts from "$lib/texts";
  import { Shredder } from "@lucide/svelte";
</script>

<Button
  shouldConfirm={true}
  Icon={Shredder}
  formaction="?/delete"
  content={texts.crud.delete}
  config="danger"
></Button>
