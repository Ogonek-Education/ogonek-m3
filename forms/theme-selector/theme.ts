import type { Theme } from "$lib/components";
import type { Icon } from "@lucide/svelte";
import {
  Atom,
  Coffee,
  Monitor,
  Moon,
  Sun,
  TreeDeciduous,
} from "@lucide/svelte";
import { tv } from "tailwind-variants";

export const themeSelector = tv({
  base: "text-accent flex bg-clickable  focus:outline-hidden border-primary text-sm padding-default",
});

export const themes: {
  value: Theme;
  label: string;
  Icon?: typeof Icon;
  fav?: boolean;
}[] = [
  { value: "auto", label: "Авто", Icon: Monitor },
  { value: "light", label: "Огонёк", Icon: Sun },
  { value: "dark", label: "Уголёк", Icon: Moon },
  { value: "griso", label: "Griso", Icon: Coffee },
  { value: "gruvbox", label: "Gruvbox", Icon: TreeDeciduous, fav: true },
  { value: "atom", label: "Atom", Icon: Atom },
];
