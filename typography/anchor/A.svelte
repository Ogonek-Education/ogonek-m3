<script lang="ts">
  import clsx from "clsx";
  import { anchor } from "./theme";
  import type { AnchorProps } from "./types";

  let {
    children,
    color = "primary",
    asButton = false,
    onclick,
    href = "#",
    class: className,
    ...restProps
  }: AnchorProps = $props();

  let linkCls = $derived(anchor({ color, class: clsx(className) }));

  // Handle click events when in button mode
  function handleClick(event: MouseEvent) {
    if (asButton) {
      event.preventDefault(); // Prevent default anchor behavior
    }
    // Forward the onclick handler if provided
    if (onclick) {
      onclick(event);
    }
  }

  let anchorButtonDataCy = $derived(restProps["data-cy"]);
  let buttonProps = $derived(() => {
    const {
      href,
      target,
      rel,
      download,
      ["data-cy"]: _dataCy,
      ...filtered
    } = restProps;
    return filtered;
  });
</script>

{#if asButton}
  <!-- Render as a button that looks like a link -->
  <button
    type="button"
    class={linkCls}
    onclick={handleClick}
    {...buttonProps}
    data-cy={anchorButtonDataCy ?? "anchor-button"}
  >
    {@render children()}
  </button>
{:else}
  <!-- Standard anchor behavior -->
  <a {href} class={linkCls} onclick={handleClick} {...restProps}>
    {@render children()}
  </a>
{/if}
