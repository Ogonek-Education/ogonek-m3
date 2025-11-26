<script lang="ts">
  import texts from "$lib/texts";
  import ButtonIcon from "../ButtonIcon.svelte";
</script>

<ButtonIcon
  tooltipContent={texts.crud.save}
  type="submit"
  variant="filled"
  data-cy="save"
  iconProps={{ name: "save" }}
></ButtonIcon>
