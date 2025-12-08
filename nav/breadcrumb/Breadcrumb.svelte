<script lang="ts">
  import type { BreadcrumbProps } from "./types";
  import { breadcrumb } from "./theme";
  import clsx from "clsx";

  let {
    children,
    class: className,
    classes,
    olClass,
    ariaLabel = "Breadcrumb",
    ...restProps
  }: BreadcrumbProps = $props();

  const styling = $derived(classes ?? { list: olClass });

  const { base, list } = breadcrumb();
  let classNav = $derived(base({ class: clsx(base, className) }));
  let classList = $derived(list({ class: clsx(styling.list) }));
</script>

<nav aria-label={ariaLabel} {...restProps} class={classNav}>
  <ol class={classList}>
    {@render children()}
  </ol>
</nav>
