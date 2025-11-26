import type { DialogueVariants } from "./theme";

export type DialogueProps = DialogueVariants & {
  toggle: () => void;
  withState?: boolean;
  supportingText: string;
  headline?: string;
  confirmText: string;
  confirmAction?: string;
};
