<script lang="ts">
  import texts from "$lib/texts";
  import Button from "../Button.svelte";
  const {
    variant = "text",
  }: {
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
  } = $props();
</script>

<Button
  iconProps={{ name: "cancel" }}
  data-cy="cancel-button"
  {variant}
  href=".">{texts.crud.cancel}</Button
>
