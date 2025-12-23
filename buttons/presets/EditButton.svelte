<script lang="ts">
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
  import ButtonIcon from "../ButtonIcon.svelte";
  import Button from "../Button.svelte";
  import FAB from "../FAB.svelte";
  import Tooltip from "../../forms/tooltip/Tooltip.svelte";

  const {
    variant = "filled",
    href,
    fab = false,
  }: {
    href: string;
    variant?: "filled" | "elevated" | "tonal" | "outlined" | "text";
    fab?: boolean;
  } = $props();
</script>

{#if !fab}
  {#if $readOnly}
    <Tooltip
      subhead="Недоступно в режиме чтения"
      supportingText="Оформите платный аккаунт, чтобы редактировать."
    >
      {#snippet trigger()}
        <Button
          {variant}
          iconProps={{ name: "edit" }}
          data-cy="edit-button"
          type="submit"
          aria-label="Edit"
          disabled={$readOnly}>{texts.crud.edit}</Button
        >
      {/snippet}
      {#snippet children()}
        <Button href="/pricing" variant="filled">Купить подписку</Button>
      {/snippet}
    </Tooltip>
  {:else}
    <Button
      {variant}
      iconProps={{ name: "edit" }}
      data-cy="edit-button"
      type="submit"
      aria-label="Edit"
      {href}>{texts.crud.edit}</Button
    >
  {/if}
{:else if $readOnly}
  <Tooltip
    subhead="Недоступно в режиме чтения"
    supportingText="Оформите платный аккаунт, чтобы редактировать."
  >
    {#snippet trigger()}
      <FAB disabled={$readOnly} iconProps={{ name: "edit" }} />
    {/snippet}
    {#snippet children()}
      <Button href="/pricing" variant="filled">Купить подписку</Button>
    {/snippet}
  </Tooltip>
{:else}
  <FAB {href} iconProps={{ name: "edit" }} />
{/if}
