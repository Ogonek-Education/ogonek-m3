<script lang="ts">
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
  import ButtonIcon from "../ButtonIcon.svelte";
  import Button from "../Button.svelte";
  import FAB from "../FAB.svelte";
  import Tooltip from "../../forms/tooltip/Tooltip.svelte";

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

{#if !fab}
  {#if $readOnly}
    <Tooltip
      subhead="Недоступно в режиме чтения"
      supportingText="Оформите платный аккаунт, чтобы редактировать."
    >
      {#snippet trigger()}
        <ButtonIcon
          {variant}
          iconProps={{ name: "edit" }}
          data-cy="edit-button"
          type="submit"
          aria-label="Edit"
          tooltipContent={texts.crud.edit}
          disabled={$readOnly}
        />
      {/snippet}
      {#snippet children()}
        <Button href="/pricing" variant="filled">Купить подписку</Button>
      {/snippet}
    </Tooltip>
  {:else}
    <ButtonIcon
      {variant}
      iconProps={{ name: "edit" }}
      data-cy="edit-button"
      type="submit"
      aria-label="Edit"
      tooltipContent={texts.crud.edit}
      {href}
    />
  {/if}
{:else}
  {#if $readOnly}
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
{/if}
