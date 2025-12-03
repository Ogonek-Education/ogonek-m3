<script lang="ts">
  import Icon from "../../utils/icon/Icon.svelte";
  import Layer from "../../utils/Layer.svelte";
  import { tab } from "./theme";
  import type { TabProps } from "./types";

  const { iconProps, active, name, value, ...restProps }: TabProps = $props();

  const { base, icon, label: labelCls } = $derived(tab({ active }));
</script>

<a {...restProps} class={base()}>
  <Icon {...iconProps} class={icon()} />
  <Layer />
  <p class={labelCls()}>{name}</p>
</a>
