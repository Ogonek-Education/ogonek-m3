import { tv } from "tailwind-variants";

export const labelt = tv({
  base: "md-sys-typescale-label-small md:md-sys-typescale-label-medium lg:md-sys-typescale-label-large",
  variants: {
    type: {
      default: "font-medium",
      prominent: "font-semibold",
    },
  },
});
