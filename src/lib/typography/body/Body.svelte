<script lang="ts">
  import clsx from "clsx";
  import { body } from "./theme.js";
  import type { BodyProps } from "./types.js";

  let { children, class: className, ...restProps }: BodyProps = $props();

  let classP = $derived(
    body({
      class: clsx(className),
    }),
  );
</script>

<p {...restProps} class={classP}>
  {@render children()}
</p>
