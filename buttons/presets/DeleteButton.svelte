<script lang="ts">
  import texts from "$lib/texts";
  import ButtonIcon from "../ButtonIcon.svelte";
</script>

<ButtonIcon
  iconProps={{ name: "delete" }}
  tooltipContent={texts.crud.delete}
  formaction="?/delete"
></ButtonIcon>
