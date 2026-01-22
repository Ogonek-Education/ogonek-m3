<script lang="ts">
  import texts from "$lib/texts";
  import Button from "../Button.svelte";
  import ButtonIcon from "../ButtonIcon.svelte";
  const {
    variant = "text",
    mobile = false,
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
    mobile?: boolean;
  } = $props();
</script>

{#if mobile}
  <ButtonIcon
    iconProps={{ name: "cancel" }}
    data-cy="cancel-button"
    aria-label={texts.crud.cancel}
    {variant}
    href="."
  />
{:else}
  <Button
    iconProps={{ name: "cancel" }}
    data-cy="cancel-button"
    {variant}
    href=".">{texts.crud.cancel}</Button
  >
{/if}
