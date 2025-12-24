<script lang="ts">
  import Button from "../Button.svelte";
  import ButtonIcon from "../ButtonIcon.svelte";

  const {
    mobile = false,
    label = "Поделиться",
    ariaLabel,
    href,
    onclick,
    dataCy = "share-button",
  }: {
    mobile?: boolean;
    label?: string;
    ariaLabel?: string;
    href?: string;
    onclick?: () => void;
    dataCy?: string;
  } = $props();
</script>

{#if mobile}
  <ButtonIcon
    iconProps={{ name: "share" }}
    {href}
    {onclick}
    variant="text"
    data-cy={dataCy}
    aria-label={ariaLabel ?? label}
  />
{:else}
  <Button
    variant="text"
    iconProps={{ name: "share" }}
    {href}
    {onclick}
    data-cy={dataCy}>{label}</Button
  >
{/if}
