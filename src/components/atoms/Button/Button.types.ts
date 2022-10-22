export type VariantProps = "primary" | "outline" | "danger" | "text";
export type ButtonType = "button" | "submit" | "reset";

export type ButtonProps = {
  id?: string;
  type?: ButtonType;
  variant?: VariantProps;
  width?: string | number;
  height?: string | number;
  children: JSX.Element | string;
  fullWidth?: boolean;
  disabled?: boolean;
  className?: string;
  onClick?:
    | ((event: React.MouseEvent<HTMLButtonElement, MouseEvent>) => void)
    | undefined;
};
