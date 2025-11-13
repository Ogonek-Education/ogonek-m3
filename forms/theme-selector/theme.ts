import type { Theme, ThemeInfo } from "$lib/components";
import {
  Anvil,
  Coffee,
  Flame,
  Monitor,
  MountainSnow,
  TreeDeciduous,
} from "@lucide/svelte";
import { tv } from "tailwind-variants";

export const themeSelector = tv({
  base: "text-accent flex bg-clickable  focus:outline-hidden border-primary text-sm padding-default",
});

export const themes: Record<Theme, ThemeInfo> = {
  light: {
    label: "Огонёк",
    Icon: Flame,
    description:
      "Тщательно подобранные оттенки белого и черного, муки выбора акцентных цветов. Или просто тема по умолчанию.",
    colors: {
      bgSolid: "#ffffff",
      bgSecondary: "#f5f5f4",
      accent: "#e85f5c",
      primary: "#0c0a09",
      secondary: "#57534e",
      tertiary: "#a8a29e",
      border: "#e7e5e4",
    },
  },
  dark: {
    label: "Уголёк",
    Icon: Anvil,
    description:
      " В печке уже нет пламени, только горсть углей, присыпанных пеплом. Но тепло продолжает исходить от её закопчённых стен, согревая комнату до самого утра.",
    colors: {
      bgSolid: "#0d0d0d",
      bgSecondary: "#151515",
      accent: "#5a6c7d",
      primary: "#d0d0d0",
      secondary: "#909090",
      tertiary: "#606060",
      border: "#252525",
    },
  },
  griso: {
    label: "Griso",
    Icon: Coffee,
    description:
      "Яркий утренний рассвет, на дереве с густой листвой поет тихую мелодию соловей. На зеленом лугу блестит в первых лучах солнца роса. Легкой струйкой поднимается пар из чашки свежесваренного кофе.",
    colors: {
      bgSolid: "#1e1e2e",
      bgSecondary: "#313244",
      accent: "#f38ba8",
      primary: "#cdd6f4",
      secondary: "#bac2de",
      tertiary: "#a6adc8",
      border: "#45475a",
    },
  },
  gruvbox: {
    label: "Gruvbox",
    Icon: TreeDeciduous,
    description:
      " Вы находите на антресоли документы своего дедушки. Партийный билет, грамоты, диплом. Бумага пожелтела, а машинописный текст немного выцвел.",
    colors: {
      bgSolid: "#282828",
      bgSecondary: "#3c3836",
      accent: "#fe8019",
      primary: "#ebdbb2",
      secondary: "#d5c4a1",
      tertiary: "#bdae93",
      border: "#504945",
    },
  },
  nord: {
    label: "Nord",
    Icon: MountainSnow,
    description:
      "Фонари отбрасывают на снег яркие сизые пятна. И кто придумал использовать ртуть для освещения?",
    colors: {
      bgSolid: "#2e3440",
      bgSecondary: "#3b4252",
      accent: "#88c0d0",
      primary: "#eceff4",
      secondary: "#e5e9f0",
      tertiary: "#d8dee9",
      border: "#3e4451",
    },
  },
  auto: {
    label: "Авто",
    Icon: Monitor,
    description: "Для тех, кто в потоке",
    colors: {
      bgSolid: "#ffffff",
      bgSecondary: "#f5f5f4",
      accent: "#e85f5c",
      primary: "#0c0a09",
      secondary: "#57534e",
      tertiary: "#a8a29e",
      border: "#e7e5e4",
    },
  },
};
