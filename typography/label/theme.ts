import { tv } from "tailwind-variants";

export const labelt = tv({
  base: "font-medium text-tiny md:text-xs lg:text-sm",
  variants: {
    type: {
      default: "font-medium",
      prominent: "font-semibold",
    },
  },
});
