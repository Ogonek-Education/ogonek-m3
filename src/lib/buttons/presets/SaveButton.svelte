<script lang="ts">
  import texts from "$lib/texts";
  import Button from "../Button.svelte";
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
  <Button
    type="submit"
    {variant}
    data-cy="save-button"
    iconProps={{ name: "save" }}>{texts.crud.save}</Button
  >
{:else}
  <FAB type="submit" data-cy="save-button" iconProps={{ name: "save" }}></FAB>
{/if}
