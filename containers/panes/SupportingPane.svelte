<script lang="ts">
  import clsx from "clsx";
  import type { SupportingPaneProps } from "./types";
  import { supportingPane } from "./theme";

  const {
    main,
    supporting,
    position = "right",
    centered = false,
    class: className,
    mainClass,
    supportingClass,
  }: SupportingPaneProps = $props();

  let entered = $state(false);

  const {
    base,
    main: mainCls,
    supporting: supportingCls,
  } = $derived(supportingPane({ position, centered }));
</script>

<div class={base({ class: clsx(className) })}>
  <div class={mainCls({ class: clsx(mainClass) })}>
    {@render main()}
  </div>
  <aside
    class={supportingCls({
      class: clsx(supportingClass),
    })}
    data-entered={entered}
    data-position={position}
  >
    {@render supporting()}
  </aside>
</div>
