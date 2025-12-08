<script lang="ts">
  import texts from "$lib/texts";
  import ButtonIcon from "../ButtonIcon.svelte";
  const {
    variant = "outlined",
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
  } = $props();
</script>

<ButtonIcon
  iconProps={{ name: "cancel" }}
  tooltipContent={texts.crud.cancel}
  {variant}
  href="."
></ButtonIcon>
