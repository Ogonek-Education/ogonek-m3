import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

export type ToggleVariants = VariantProps<typeof toggle> &
  Classes<typeof toggle>;

export const toggle = tv({
  slots: {
    span: "me-3 shrink-0 bg-gray-200 rounded-full peer-focus:ring-4 peer-checked:after:translate-x-full peer-checked:rtl:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:bg-white after:border-gray-300 after:border after:rounded-full after:transition-all dark:bg-gray-600 dark:border-gray-500 relative ",
    label: "flex items-center",
    input:
      "w-4 h-4 bg-gray-100 border-gray-300 dark:ring-offset-gray-800 focus:ring-2 rounded-sm dark:bg-gray-700 dark:border-gray-600 sr-only peer",
  },
  variants: {
    disabled: {
      true: { label: "cursor-not-allowed opacity-50" },
    },
    checked: {
      true: "",
      false: "",
    },
    off_state_label: {
      true: { span: "ms-3" },
    },
    color: {
      // primary, secondary, gray, red, orange, amber, yellow, lime, green, emerald, teal, cyan, sky, blue, indigo, violet, purple, fuchsia, pink, rose
      primary: {
        span: "peer-focus:ring-primary-300 dark:peer-focus:ring-primary-800 peer-checked:bg-primary-600",
      },
      secondary: {
        span: "peer-focus:ring-secondary-300 dark:peer-focus:ring-secondary-800 peer-checked:bg-secondary-600",
      },
      gray: {
        span: "peer-focus:ring-gray-300 dark:peer-focus:ring-gray-800 peer-checked:bg-gray-500",
      },
    },
    size: {
      small: {
        span: "w-9 h-5 after:top-[2px] after:start-[2px] after:h-4 after:w-4",
      },
      default: {
        span: "w-11 h-6 after:top-0.5 after:start-[2px] after:h-5 after:w-5",
      },
      large: {
        span: "w-14 h-7 after:top-0.5 after:start-[4px]  after:h-6 after:w-6",
      },
    },
  },
  defaultVariants: {
    color: "primary",
  },
});
