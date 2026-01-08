/**
 * Svelte action that traps focus within a DOM node and handles Escape key
 * @param node - The DOM node to trap focus within
 * @param options - Optional configuration object
 * @returns An action object with destroy method
 */
export function trapFocus(
  node: HTMLElement,
  options: { onEscape?: () => void; isClosing?: boolean } | null = {},
) {
  // If options is null, don't trap focus at all
  if (options === null) {
    return {
      update(
        newOptions: { onEscape?: () => void; isClosing?: boolean } | null = {},
      ) {
        options = newOptions;
      },
      destroy() {},
    };
  }

  const previous = document.activeElement as HTMLElement | null;
  // Track if we're currently closing via outside click
  let isClosingViaOutsideClick = false;
  // Create a flag to prevent re-focusing when focus is moved outside
  let isFocusMovedOutside = false;

  function focusable(): HTMLElement[] {
    return Array.from(
      node.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])',
      ),
    );
  }

  function handleKeydown(event: KeyboardEvent): void {
    if (event.key === "Tab" && options !== null) {
      const current = document.activeElement;
      const elements = focusable();
      const first = elements.at(0);
      const last = elements.at(-1);

      if (event.shiftKey && current === first) {
        last?.focus();
        event.preventDefault();
      }

      if (!event.shiftKey && current === last) {
        first?.focus();
        event.preventDefault();
      }
    } else if (event.key === "Escape" && options !== null && options.onEscape) {
      event.preventDefault();
      // Mark as closing via escape to prevent focus restoration
      isClosingViaOutsideClick = true;
      options.onEscape();
    }
  }

  // Handler for when focus moves outside the trapped area
  function handleFocusOut(event: FocusEvent) {
    // If focus is moving outside our node and not to one of our triggers
    if (
      !node.contains(event.relatedTarget as Node) &&
      event.relatedTarget !== previous
    ) {
      isFocusMovedOutside = true;
    }
  }

  // Initialize the action
  function initialize() {
    // Only add event listeners if options is not null
    if (options !== null) {
      // Check if we're currently in a closing state
      isClosingViaOutsideClick = !!options.isClosing;

      // Only auto-focus if not closing from outside click
      if (!isClosingViaOutsideClick && !isFocusMovedOutside) {
        const elements = focusable();
        if (elements.length > 0) {
          elements[0].focus();
        }
      }

      node.addEventListener("keydown", handleKeydown);
      node.addEventListener("focusout", handleFocusOut);
    }
  }

  // Cleanup function
  function cleanup() {
    if (options !== null) {
      node.removeEventListener("keydown", handleKeydown);
      node.removeEventListener("focusout", handleFocusOut);

      // Only restore focus if not closing via outside click and focus hasn't moved outside
      if (!isClosingViaOutsideClick && !isFocusMovedOutside && previous) {
        setTimeout(() => {
          previous.focus({ preventScroll: true });
        }, 0);
      }
    }
  }

  // Initialize on mount
  initialize();

  // Return the action object with update and destroy methods
  return {
    update(
      newOptions: { onEscape?: () => void; isClosing?: boolean } | null = {},
    ) {
      // Clean up existing listeners first
      node.removeEventListener("keydown", handleKeydown);
      node.removeEventListener("focusout", handleFocusOut);

      // Update the closing state
      if (newOptions && newOptions.isClosing !== undefined) {
        isClosingViaOutsideClick = newOptions.isClosing;
      }

      options = newOptions;

      // Reinitialize with new options
      if (options !== null) {
        node.addEventListener("keydown", handleKeydown);
        node.addEventListener("focusout", handleFocusOut);
      }
    },
    destroy() {
      cleanup();
    },
  };
}

import {
  arrow as arrowMw,
  autoUpdate,
  computePosition,
  flip,
  offset,
  shift,
  type Middleware,
  type Placement,
} from "@floating-ui/dom";

type FloatingParams = {
  reference: HTMLElement; // anchor
  placement?: Placement; // e.g. 'bottom-start'
  strategy?: "absolute" | "fixed"; // use 'fixed' to escape overflow clipping
  offsetPx?: number; // spacing between anchor and overlay
  middleware?: Middleware[]; // extra middleware
  arrowEl?: HTMLElement | null; // optional arrow element inside floating
  arrowPadding?: number;
  enabled?: boolean;
  onUpdate?: (data: { x: number; y: number; placement: Placement }) => void;
};

export function floating(node: HTMLElement, params: FloatingParams) {
  let cleanup: VoidFunction | null = null;

  let p: FloatingParams = {
    placement: "bottom-start",
    strategy: "fixed",
    offsetPx: 8,
    enabled: true,
    ...params,
  };

  async function update() {
    if (!p.enabled) return;
    if (!p.reference) return;

    const middleware: Middleware[] = [
      offset(p.offsetPx ?? 8),
      flip(),
      shift({ padding: 8 }),
      ...(p.middleware ?? []),
    ];

    if (p.arrowEl) {
      middleware.push(
        arrowMw({
          element: p.arrowEl,
          padding: p.arrowPadding ?? 6,
        }),
      );
    }

    const { x, y, placement, middlewareData } = await computePosition(
      p.reference,
      node,
      {
        placement: p.placement,
        strategy: p.strategy,
        middleware,
      },
    );

    Object.assign(node.style, {
      position: p.strategy,
      left: `${x}px`,
      top: `${y}px`,
    });

    // Optional arrow positioning
    if (p.arrowEl && middlewareData.arrow) {
      const { x: ax, y: ay } = middlewareData.arrow as {
        x?: number;
        y?: number;
      };
      const side = placement.split("-")[0]; // 'top'|'bottom'|'left'|'right'
      const staticSide: Record<string, string> = {
        top: "bottom",
        bottom: "top",
        left: "right",
        right: "left",
      };

      Object.assign(p.arrowEl.style, {
        left: ax != null ? `${ax}px` : "",
        top: ay != null ? `${ay}px` : "",
        right: "",
        bottom: "",
        [staticSide[side]]: `-4px`, // arrow size tweak
      } as any);
    }

    p.onUpdate?.({ x, y, placement: placement as Placement });
  }

  function startAutoUpdate() {
    stopAutoUpdate();
    if (!p.enabled || !p.reference) return;

    cleanup = autoUpdate(p.reference, node, update, {
      // works well for scroll containers too
      ancestorScroll: true,
      ancestorResize: true,
      elementResize: true,
      layoutShift: true,
      animationFrame: false,
    });
  }

  function stopAutoUpdate() {
    cleanup?.();
    cleanup = null;
  }

  // init
  startAutoUpdate();
  void update();

  return {
    update(next: FloatingParams) {
      p = { ...p, ...next };
      startAutoUpdate();
      void update();
    },
    destroy() {
      stopAutoUpdate();
    },
  };
}
