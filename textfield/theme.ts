import { tv, type VariantProps } from "tailwind-variants";

export type TextFieldVariants = VariantProps<typeof textfield>;

export const textfield = tv({
  slots: {
    base: `
      group w-full h-14 px-0 bg-md-sys-color-surface-container-highest
      rounded-t-xs state-layer before:rounded-xs hover:before:bg-md-sys-color-on-surface/8 relative flex items-center border-b
      border-md-sys-color-on-surface-variant
      hover:border-md-sys-color-on-surface
      focus-within:border-md-sys-color-primary
      focus-within:border-b-2
      disabled:bg-md-sys-color-on-surface/4
      disabled:border-md-sys-color-on-surface/12
    `,

    inputWrapper: `
      relative flex-1 px-4
    `,

    input: `
      peer w-full pt-4 bg-transparent outline-none
      md-sys-typescale-body-large text-md-sys-color-on-surface
      disabled:text-md-sys-color-on-surface/38
    `,

    label: `
      absolute left-4 top-1/2 -translate-y-1/2
      md-sys-typescale-body-large
      text-md-sys-color-on-surface-variant
      transition-all duration-150 pointer-events-none

      peer-focus:text-md-sys-color-primary
      peer-invalid:text-md-sys-color-error

      peer-focus:top-1.5 peer-focus:md-sys-typescale-body-small peer-focus:-translate-y-1

      peer-not-placeholder-shown:top-1.5 peer-not-placeholder-shown:md-sys-typescale-body-small peer-not-placeholder-shown:-translate-y-1
    `,

    leadingIcon: `
      text-md-sys-color-on-surface-variant size-6
      group-focus-within:text-md-sys-color-primary
      peer-invalid:text-md-sys-color-error ml-3
    `,

    trailingIcon: `
    mr-3 text-md-sys-color-on-surface-variant size-6
      group-focus-within:text-md-sys-color-primary
      peer-invalid:text-md-sys-color-error
    `,

    supportingText: `
      px-4 pt-1 flex justify-between
      md-sys-typescale-body-small
      text-md-sys-color-on-surface-variant
      peer-invalid:text-md-sys-color-error
    `,
  },

  variants: {
    error: {
      true: {
        base: "border-md-sys-color-error focus-within:border-md-sys-color-error",
        label: "text-md-sys-color-error",
        supportingText: "text-md-sys-color-error",
        leadingIcon: "text-md-sys-color-error",
        trailingIcon: "text-md-sys-color-error",
      },
    },
    disabled: {
      true: {
        base: "pointer-events-none opacity-60",
      },
    },
  },
});
