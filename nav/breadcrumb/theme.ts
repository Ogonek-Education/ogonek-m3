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
    base: "inline-flex items-center gap-1 text-sm active:text-accent",
    separator: "size-4",
  },
  variants: {
    home: {
      true: "",
      false: "",
    },
    hasHref: {
      true: "hover:text-primary transition-colors max-w-[200px] truncate",
      false: "text-tertiary max-w-[200px] truncate",
    },
  },
});
