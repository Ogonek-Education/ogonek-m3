import { tv, type VariantProps } from "tailwind-variants";

export type ParagraphVariants = VariantProps<typeof paragraph>;

export const paragraph = tv({
  base: "text-primary",
  variants: {
    align: {
      left: "text-left",
      center: "text-center",
      right: "text-right",
    },
    whitespace: {
      normal: "whitespace-normal",
      nowrap: "whitespace-nowrap",
      pre: "whitespace-pre",
      preline: "whitespace-pre-line",
      prewrap: "whitespace-pre-wrap",
    },
    italic: {
      true: "italic",
    },
    firstUpper: {
      true: "first-line:uppercase first-line:tracking-widest first-letter:text-7xl first-letter:font-bold first-letter:text-gray-900 dark:first-letter:text-gray-100 first-letter:me-3 first-letter:float-left",
      false: "",
    },
    justify: {
      true: "text-justify",
      false: "",
    },
  },
});
