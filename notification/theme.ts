import { tv } from "tailwind-variants";

export const notificationTheme = tv({
  slots: {
    base: "gap-default bg-bg-primary rounded-2xl border-2 font-semibold padding-default fixed top-6 left-1/2 z-50 flex -translate-x-1/2 items-center text-center md:text-left",
    button: "bg-clickable rounded-full p-1",
    icon: "size-4 rounded-full",
  },
  variants: {
    type: {
      success: {
        base: "text-green border-green",
        button: "text-white bg-green",
      },
      error: {
        base: "text-red border-red",
        button: "text-white bg-red",
      },
      info: {
        base: "text-white border-primary",
        button: "bg-clickable",
      },
    },
  },
});
