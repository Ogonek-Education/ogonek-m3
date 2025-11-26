<script lang="ts">
  import Layer from "../../utils/Layer.svelte";
  import { listiem } from "./theme";
  import type { ListitemProps } from "./types";

  let {
    leading,
    overline = "",
    headline = "",
    supporting = "",
    trailing,
    selected,
    lines = overline && supporting ? 3 : overline || supporting ? 2 : 1,
    ...restProps
  }: ListitemProps = $props();

  const cls = listiem({ lines, selected });
</script>

{#snippet content()}
  {#if leading}
    <div class={cls.leading()}>
      {@render leading()}
    </div>
  {/if}
  <div class={cls.body()}>
    {#if overline}
      <p class={cls.overline()}>{overline}</p>
    {/if}
    <p class={cls.headline()}>{headline}</p>
    {#if supporting}
      <p class={cls.supporting()}>{supporting}</p>
    {/if}
  </div>
  {#if trailing}
    <div class={cls.trailing()}>
      {@render trailing()}
    </div>
  {/if}
{/snippet}

<li style:display="contents">
  {#if "label" in restProps}
    {@const { label: _, ...extra } = restProps}
    <label class={cls.base()} {...extra}>
      <Layer />
      {@render content()}
    </label>
  {:else if "onclick" in restProps}
    <button type="button" class={cls.base()} {...restProps}>
      <Layer />
      {@render content()}
    </button>
  {:else if "href" in restProps}
    <a class={cls.base()} {...restProps}>
      <Layer />
      {@render content()}
    </a>
  {:else}
    <div class={cls.base()} {...restProps}>
      {@render content()}
    </div>
  {/if}
</li>

<style>
  .m3-container {
    display: flex;
    padding: 0.5rem 1.5rem 0.5rem 1rem;
    align-items: center;
    gap: 1rem;

    text-align: inherit;
    border: none;
    position: relative;
    background: transparent;
    color: inherit;
  }
  button.m3-container,
  label.m3-container {
    cursor: pointer;
  }
  .lines-1 {
    height: calc(3.5rem + var(--m3-util-density-term));
  }
  .lines-2 {
    height: calc(4.5rem + var(--m3-util-density-term));
  }
  .lines-3 {
    height: calc(5.5rem + var(--m3-util-density-term));
    padding-top: 0.75rem;
    padding-bottom: 0.75rem;
    align-items: flex-start;
  }
  .body {
    flex-grow: 1;
  }
  .leading,
  .trailing {
    display: contents;
    color: rgb(var(--m3-scheme-on-surface-variant));
  }
  .leading > :global(svg),
  .trailing > :global(svg) {
    width: 1.5rem;
    height: 1.5rem;
    flex-shrink: 0;
  }

  p {
    margin: 0;
  }
  .supporting,
  .overline- {
    color: rgb(var(--m3-scheme-on-surface-variant));
  }
  .headline {
    color: rgb(var(--m3-scheme-on-surface));
  }
</style>
