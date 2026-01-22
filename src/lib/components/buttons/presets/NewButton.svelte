<script>
  import { Button } from "..";
  import Tooltip from "../../forms/tooltip/Tooltip.svelte";
  import texts from "$lib/texts";
  import { readOnly } from "$lib/stores";
</script>

{#if $readOnly}
  <Tooltip
    subhead="Недоступно в режиме чтения"
    supportingText="Оформите платный аккаунт, чтобы продолжить."
  >
    {#snippet trigger()}
      <Button aria-label="Add" type="submit" disabled={$readOnly}>
        {texts.crud.create}
      </Button>
    {/snippet}
    {#snippet children()}
      <Button href="/pricing" variant="filled">Купить подписку</Button>
    {/snippet}
  </Tooltip>
{:else}
  <Button aria-label="Add" type="submit">{texts.crud.create}</Button>
{/if}
