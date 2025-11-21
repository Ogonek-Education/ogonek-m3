<script lang="ts">
  import clsx from "clsx";
  import { body } from "./theme";
  import type { BodyProps } from "./types";

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
