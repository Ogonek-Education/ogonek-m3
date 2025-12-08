<script lang="ts">
  import Icon from "../utils/icon/Icon.svelte";
  import { toolbaritem } from "./theme";
  import type { ToolbarItemProps } from "./types";

  const { icon, label }: ToolbarItemProps = $props();

  const { base, icon: iconCls } = $derived(toolbaritem());
</script>

<div class={base()}>
  <Icon {...icon} class={iconCls()} />
  {#if label}
    <p>{label}</p>
  {/if}
</div>
