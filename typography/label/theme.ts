import { tv } from "tailwind-variants";

export const labelt = tv({
  base: "md-typescale-label-small md:md-typescale-label-medium lg:md-typescale-label-large",
  variants: {
    type: {
      default: "font-medium",
      prominent: "font-semibold",
    },
  },
});
