export type NavPage =
  | "dashboard"
  | "flashcards"
  | "lessons"
  | "tasks"
  | "students"
  | "calendar"
  | "settings";

export interface BreadcrumbSegment {
  segment?: string;
  label: string;
  href: string;
}
