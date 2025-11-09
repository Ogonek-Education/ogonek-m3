<script lang="ts">
  import { Button, Heading } from "$lib/components/library";
  import texts from "$lib/texts";
</script>

<Button formaction="?/delete" color="red">
  <Heading tag="h3">{texts.crud.delete}</Heading>
</Button>
