import { tv, type VariantProps } from "tailwind-variants";

// Variants
export type ButtonVariants = VariantProps<typeof button>;
export type ButtonGroupVariants = VariantProps<typeof buttonGroup>;
export type FABVariants = VariantProps<typeof fab>;
export type FABMenuVariants = VariantProps<typeof fabMenu>;
export type ButtonMDVariants = VariantProps<typeof button>;
export type ButtonIconVariants = VariantProps<typeof buttonIcon>;
export type FABMenuItemVariants = VariantProps<typeof fabMenuItem>;

export const button = tv({
  slots: {
    base: "md-component-button-base group min-w-max md-sys-typescale-button-label",
    icon: "size-6",
  },
  variants: {
    variant: {
      elevated: "",
      filled: "md-component-button-filled",
      tonal: "md-component-button-tonal",
      outlined: "md-component-button-outline",
      text: "md-component-button-text",
      error: "md-component-button-error",
      bare: "",
    },
    size: {
      xs: "",
      sm: "",
      md: "h-14 px-6 gap-2",
      lg: "",
      xl: "",
    },
    shape: {
      round: "rounded-full before:rounded-full",
      square: "rounded-md",
    },
    selected: {
      true: "bg-md-sys-color-primary text-md-sys-color-on-primary rounded-md",
      false:
        "bg-md-sys-color-surface-container text-md-sys-color-on-surface-container rounded-full",
    },
  },
});

export const buttonIcon = tv({
  slots: {
    base: "md-component-button-base group max-w-max",
    icon: "size-6",
  },
  variants: {
    variant: {
      elevated: {},
      filled: "md-component-button-filled",
      tonal: "md-component-button-tonal",
      outlined: "md-component-button-outline",
      text: "md-component-button-text",
    },
    size: {
      xs: "",
      sm: "",
      md: "h-14",
      lg: "",
      xl: "",
    },
    width: {
      narrow: "",
      wide: "",
      default: "aspect-square",
    },
    shape: {
      round: "rounded-full before:rounded-full",
      square: "rounded-xl",
    },
    variation: {
      toggle: "",
      default: "",
    },
  },
});

export const buttonGroup = tv({
  base: "inline-flex rounded-lg shadow-xs",
  variants: {
    size: {
      sm: "",
      md: "",
      lg: "",
    },
  },
  defaultVariants: {
    size: "md",
  },
});

export const fab = tv({
  slots: {
    base: "md-component-button-base relative z-50",
    icon: "",
    label: "text-medium ",
  },
  variants: {
    config: {
      primary: {
        base: "bg-md-sys-color-primary shadow-elevation-1 hover:shadow-elevation-2 hover:before:bg-md-sys-color-on-primary/8 rounded-lg focus:before:bg-md-sys-color-on-primary/10 active:before:bg-md-sys-color-on-primary/10 ",
        icon: "text-md-sys-color-on-primary",
        label: "text-md-sys-color-on-primary",
      },
    },
    expanded: {
      true: "gap-2 px-4",
      false: "aspect-square",
    },
    size: {
      regular: {
        base: "h-14",
        icon: "size-6",
        label: "md-sys-typescale-fab-label",
      },
      medium: {
        base: "h-20",
        icon: "size-7",
      },
      large: {
        base: "h-24",
        icon: "size-9",
      },
    },
  },
});

export const fabMenu = tv({
  slots: {
    base: "gap-2 pb-2 flex flex-col absolute z-50",
  },
  variants: {
    position: { top: "top-16" },
  },
});

export const fabMenuItem = tv({
  slots: {
    base: "md-component-button-base group relative max-w-max h-14 rounded-full before:rounded-full gap-2 px-6 md-sys-typescale-fab-label z-50 shadow-elevation-2 hover:shadow-elevation-3",
    icon: "size-6",
  },
  variants: {
    variant: {
      primary: "md-component-button-filled",
      secondary: "md-component-button-tonal",
      tertiary: "md-component-button-outline",
    },
  },
});
