<script lang="ts">
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
  import ButtonIcon from "../ButtonIcon.svelte";
  import FAB from "../FAB.svelte";

  const {
    variant = "tonal",
    href,
    fab = false,
  }: {
    href: string;
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
    fab?: boolean;
  } = $props();
</script>

{#if !$readOnly}
  {#if !fab}
    <ButtonIcon
      {variant}
      iconProps={{ name: "edit" }}
      data-cy="edit-button"
      type="submit"
      aria-label="Edit"
      tooltipContent={texts.crud.edit}
      {href}
    ></ButtonIcon>
  {:else}
    <FAB {href} iconProps={{ name: "edit" }}></FAB>
  {/if}
{/if}
