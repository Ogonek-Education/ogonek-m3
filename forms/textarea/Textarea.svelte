<script lang="ts">
  import { createDismissableContext } from "../../utils";
  import CloseButton from "../../utils/CloseButton.svelte";
  import { textarea } from "./theme";
  import clsx from "clsx";
  import type { TextareaProps } from "./types";

  let {
    header,
    footer,
    addon,
    value = $bindable(),
    elementRef = $bindable(),
    divClass,
    innerClass,
    headerClass,
    footerClass,
    addonClass,
    disabled,
    class: className,
    classes,
    clearable,
    clearableSvgClass,
    clearableColor = "none",
    clearableClass,
    clearableOnClick,
    textareaClass,
    ...restProps
  }: TextareaProps = $props();

  const styling = $derived(
    classes ?? {
      div: divClass,
      inner: innerClass,
      header: headerClass,
      footer: footerClass,
      addon: addonClass,
      textarea: textareaClass,
      close: clearableClass,
      svg: clearableSvgClass,
    },
  );

  let hasHeader = $derived(!!header);
  let hasFooter = $derived(!!footer);
  let hasAddon = $derived(!!addon);
  let wrapped: boolean = $derived(hasHeader || hasFooter || hasAddon);

  const {
    div,
    base,
    wrapper,
    inner,
    header: headerCls,
    footer: footerCls,
    addon: addonCls,
    close,
  } = $derived(textarea({ wrapped, hasHeader, hasFooter }));

  const clearAll = () => {
    if (elementRef) {
      elementRef.value = "";
      value = undefined;
    }
    if (clearableOnClick) clearableOnClick();
  };

  createDismissableContext(clearAll);
</script>

<div class={div({ class: clsx(styling.div) })}>
  {#if !wrapped}
    <textarea
      bind:value
      bind:this={elementRef}
      {disabled}
      {...restProps}
      class={wrapper({ class: clsx(className, classes?.wrapper) })}
    ></textarea>
  {:else}
    <div class={wrapper({ class: clsx(wrapper, classes?.wrapper) })}>
      {#if header}
        <div class={headerCls({ class: clsx(header, styling.header) })}>
          {@render header()}
        </div>
      {/if}
      <div class={inner({ class: clsx(inner, styling.inner) })}>
        {#if addon}
          <div class={addonCls({ class: clsx(addon, styling.addon) })}>
            {@render addon()}
          </div>
        {/if}
        <textarea
          bind:value
          bind:this={elementRef}
          {disabled}
          {...restProps}
          class={base({ class: clsx(base, className) })}
        ></textarea>
      </div>
      {#if footer}
        <div class={footerCls({ class: clsx(styling.footer) })}>
          {@render footer()}
        </div>
      {/if}
    </div>
  {/if}
  {#if value !== undefined && value !== "" && clearable}
    <CloseButton
      class={close({ class: clsx(close, styling.close) })}
      color={clearableColor}
      aria-label="Clear search value"
      svgClass={clsx(styling.svg)}
    />
  {/if}
</div>
