import { Dispatch } from "react";
import { Breakpoints } from "styles/breakpoints";

export type DialogModalProps = {
  children?: JSX.Element;
  show: boolean;
  toggleModalVisibility: () => void;
  title?: string | JSX.Element;
  showTitle?: boolean;
  showCloseButton?: boolean;
  maxWidth?: Breakpoints | string;
  fullWidth?: boolean;
  titlePadding?: string;
  contentPadding?: string;
};
