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
    class: className,
    lines = overline && supporting ? 3 : overline || supporting ? 2 : 1,
    ...restProps
  }: ListitemProps = $props();

  const cls = $derived(listiem({ lines, selected }));
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

<li>
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
