<script lang="ts">
  import texts from "$lib/texts";
  import ButtonIcon from "../ButtonIcon.svelte";
</script>

<ButtonIcon
  iconProps={{ name: "cancel" }}
  tooltipContent={texts.crud.cancel}
  variant="outlined"
  href="."
></ButtonIcon>
