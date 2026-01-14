<script lang="ts">
  import { clickOutside } from "$lib/actions";
  import type { TransitionConfig } from "svelte/transition";
  import type { DialogueProps } from "./types";
  import { dialogue } from "./theme";
  import Button from "../../buttons/Button.svelte";
  import { isLoading } from "$lib/stores";

  let {
    withState = false,
    headline,
    supportingText,
    confirmText,
    confirmAction,
    children,
    toggle = () => {},
  }: DialogueProps = $props();

  const {
    base,
    inner,
    headlineContainer,
    buttonContainer,
    supportingTextContainer,
  } = $derived(dialogue());

  const hold = (_node: Element, { duration = 500 } = {}): TransitionConfig => ({
    duration,
  });

  const outroClass = (node: Element) => {
    const addClass = (e: Event) => {
      if (!(e.target instanceof Element)) return;
      e.target.classList.add("leaving");
    };
    const removeClass = (e: Event) => {
      if (!(e.target instanceof Element)) return;
      e.target.classList.remove("leaving");
    };
    node.addEventListener("outrostart", addClass);
    node.addEventListener("outroend", removeClass);
    return {
      destroy() {
        node.removeEventListener("outrostart", addClass);
        node.removeEventListener("outroend", removeClass);
      },
    };
  };
</script>

<div
  aria-label="scrim"
  class={`${base()} dialogue-base`}
  out:hold={{ duration: 350 }}
  use:outroClass
>
  <div
    class={`${inner()} dialogue-inner`}
    out:hold={{ duration: 500 }}
    use:outroClass
    use:clickOutside={() => {
      if (withState) {
        window.history.back();
      } else {
        toggle();
      }
    }}
  >
    {#if headline}
      <h1 class={headlineContainer()}>
        {headline}
      </h1>
    {/if}
    <p class={supportingTextContainer()}>
      {supportingText}
    </p>
    {@render children?.()}
    <div class={`${buttonContainer()} dialogue-buttons`}>
      <Button
        type="button"
        variant="text"
        data-cy="dialogue-cancel"
        onclick={() => {
          if (withState) {
            window.history.back();
          } else {
            toggle();
          }
        }}>Отмена</Button
      >
      <Button
        type="submit"
        loading={$isLoading}
        variant="filled"
        formaction={confirmAction}
        data-cy="dialogue-confirm">{confirmText}</Button
      >
    </div>
  </div>
</div>

<style>
  .dialogue-base {
    opacity: 0;
    animation: dialogueScrimIn 500ms
      var(--md-sys-motion-timing-function-emphasized-decel) forwards;
  }

  .dialogue-base.leaving {
    animation: dialogueScrimOut 350ms
      var(--md-sys-motion-timing-function-emphasized-decel) forwards;
  }

  .dialogue-inner {
    --dialogue-shape: 1rem;
    transform-origin: top;
    animation:
      dialogueIn 500ms var(--md-sys-motion-timing-function-emphasized-decel),
      dialogueOpacityIn 100ms
        var(--md-sys-motion-timing-function-emphasized-decel) backwards;
  }

  .dialogue-inner.leaving {
    animation: dialogueOut 500ms
      var(--md-sys-motion-timing-function-emphasized-decel) forwards;
  }

  .dialogue-inner > :global(h1),
  .dialogue-inner > :global(p) {
    animation: dialogueOpacityIn 150ms
      var(--md-sys-motion-timing-function-emphasized-decel) backwards;
  }

  .dialogue-inner.leaving > :global(h1),
  .dialogue-inner.leaving > :global(p) {
    animation: dialogueOpacityOut 150ms
      var(--md-sys-motion-timing-function-emphasized-decel) forwards;
  }

  .dialogue-buttons {
    animation:
      dialogueButtonsIn 500ms
        var(--md-sys-motion-timing-function-emphasized-decel),
      dialogueOpacityIn 100ms
        var(--md-sys-motion-timing-function-emphasized-decel) backwards;
  }

  .dialogue-inner.leaving .dialogue-buttons {
    animation:
      dialogueButtonsOut 500ms
        var(--md-sys-motion-timing-function-emphasized-decel),
      dialogueOpacityOut 100ms
        var(--md-sys-motion-timing-function-emphasized-decel) forwards;
  }

  @keyframes dialogueScrimIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes dialogueScrimOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }

  @keyframes dialogueIn {
    from {
      transform: scaleY(0.7);
      clip-path: inset(-100% 0 100% 0 round var(--dialogue-shape));
    }
    to {
      transform: scaleY(1);
      clip-path: inset(-100% 0 0 0 round var(--dialogue-shape));
    }
  }

  @keyframes dialogueOut {
    from {
      transform: scaleY(1);
      clip-path: inset(-100% 0 0 0 round var(--dialogue-shape));
    }
    to {
      transform: scaleY(0.7);
      clip-path: inset(-100% 0 100% 0 round var(--dialogue-shape));
    }
  }

  @keyframes dialogueButtonsIn {
    from {
      position: relative;
      bottom: 100%;
    }
    to {
      position: relative;
      bottom: 0;
    }
  }

  @keyframes dialogueButtonsOut {
    from {
      position: relative;
      bottom: 0;
    }
    to {
      position: relative;
      bottom: 100%;
    }
  }

  @keyframes dialogueOpacityIn {
    from {
      opacity: 0;
    }
    to {
      opacity: 1;
    }
  }

  @keyframes dialogueOpacityOut {
    from {
      opacity: 1;
    }
    to {
      opacity: 0;
    }
  }
</style>
