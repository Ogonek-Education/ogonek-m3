<script lang="ts">
  import texts from "$lib/texts";
  import ButtonIcon from "../ButtonIcon.svelte";
  import FAB from "../FAB.svelte";

  const {
    variant = "filled",
    fab = false,
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
    fab?: boolean;
  } = $props();
</script>

{#if !fab}
  <ButtonIcon
    tooltipContent={texts.crud.save}
    type="submit"
    {variant}
    data-cy="save"
    iconProps={{ name: "save" }}
  ></ButtonIcon>
{:else}
  <FAB type="submit" data-cy="sae" iconProps={{ name: "save" }}></FAB>
{/if}
