import { tv } from "tailwind-variants";

export const badge = tv({
  base: "inline-flex min-w-fit items-center  rounded-2xl border-3 px-2.5 py-1 font-medium ",

  variants: {
    color: {
      yellow: "bg-yellow/12 border-yellow text-yellow",
      green: "text-green bg-green/12 border-green",
      red: "text-red bg-red/12 border-red",
      blue: "text-blue bg-blue/12 border-blue",
      grey: "text-secondary bg-bg-teriary/12 border-bg-secondary",
    },
  },
});
