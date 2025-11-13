<script lang="ts">
  import { MoveLeft, Sidebar } from "@lucide/svelte";
  import { page } from "$app/state";
  import { type PageProps } from "./types";
  import { pageLayout } from "./theme";
  import clsx from "clsx";
  import Navbar from "../../nav/Navbar.svelte";

  const {
    children,
    classes,
    removeBackButton = false,
    buttonClass,
    innerDivClass,
    iconClass,
    sidebar,
    padding = "lg",
    flexCol = true,
    position,
  }: PageProps = $props();

  const segments = $derived(page.url.pathname.split("/").filter(Boolean));
  const [role, section, maybeId] = $derived(segments);

  const showBack = $derived.by(() => {
    const [firstSegment] = segments;

    if (!isAppRoot(firstSegment)) {
      return segments.length > 0;
    }

    if (segments.length < 2) return false;

    if (
      section === "dashboard" ||
      section === "settings" ||
      section === "calendar"
    )
      return false;

    return segments.length > 2;
  });

  const href = $derived(
    page.url.pathname.split("/").slice(0, -1).join("/") || "/",
  );

  function isAppRoot(segment: string): segment is "t" | "s" | "admin" {
    return segment === "t" || segment === "s" || segment === "admin";
  }

  const styling = $derived(
    classes ?? {
      content: innerDivClass,
      button: buttonClass,
      icon: iconClass,
    },
  );

  let { base, content, button, icon } = $derived(
    pageLayout({ position, flexCol, padding }),
  );
</script>

<div class={base({ class: clsx(base) })}>
  {#if showBack && !removeBackButton}
    <a {href} class={button({ class: clsx(button, styling.button) })}
      ><MoveLeft class={icon({ class: clsx(icon, styling.icon) })} /></a
    >
  {/if}
  <div class={content({ class: clsx(content, styling.content) })}>
    {@render children()}
  </div>
  {#if sidebar}
    <div class="hidden md:block">
      {@render sidebar()}
    </div>
  {/if}
</div>
