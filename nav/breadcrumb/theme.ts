import { tv, type VariantProps } from "tailwind-variants";
import type { Classes } from "../../utils";

// Variants
export type BreadcrumbVariants = VariantProps<typeof breadcrumb> &
  Classes<typeof breadcrumb>;
export type BreadcrumbItemVariants = VariantProps<typeof breadcrumbItem> &
  Classes<typeof breadcrumbItem>;

export const breadcrumb = tv({
  slots: {
    base: "flex",
    list: "inline-flex items-center space-x-1 rtl:space-x-reverse md:space-x-3 rtl:space-x-reverse",
  },
});

export const breadcrumbItem = tv({
  slots: {
    base: "inline-flex items-center gap-1",
    separator: "size-4",
  },
  variants: {
    home: {
      true: "",
      false: "",
    },
    hasHref: {
      true: "",
      false: "",
    },
  },
  compoundVariants: [
    {
      home: true,
      class: {
        base: "inline-flex items-center text-sm font-medium text-gray-700 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white",
        separator: "me-2 h-4 w-4",
      },
    },
    {
      home: false,
      hasHref: true,
      class: {
        base: "ms-1 text-sm font-medium text-gray-700 hover:text-gray-900 md:ms-2 dark:text-gray-400 dark:hover:text-white",
      },
    },
    {
      home: false,
      hasHref: false,
      class: {
        base: "ms-1 text-sm font-medium text-gray-500 md:ms-2 dark:text-gray-400",
      },
    },
  ],
});
