<script lang="ts">
  import texts from "$lib/texts";
  import ButtonIcon from "../ButtonIcon.svelte";
  const {
    variant = "tonal",
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
  } = $props();
</script>

<ButtonIcon
  iconProps={{ name: "cancel" }}
  data-cy="cancel-button"
  tooltipContent={texts.crud.cancel}
  {variant}
  href="."
></ButtonIcon>
