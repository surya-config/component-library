import { Dispatch } from "react";

export type TooltipProps = {
  children?: JSX.Element | string;
  show: boolean;
  toggleVisibility: Dispatch<boolean>;
  content?: JSX.Element | string;
};
