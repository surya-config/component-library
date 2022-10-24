export type DropdownOption = {
  label: string | JSX.Element;
  value: any;
};

export type DropdownProps = {
  label?: string;
  options?: DropdownOption[];
  children?: JSX.Element;
  value?: any;
  changeValue?: (newValue: any) => void;
  width?: string | number;
  height?: string | number;
  maxMenuHeight?: string | number;
  fullWidth?: boolean;
};

/* Style Props */
export type DropdownStyleProps = {
  width: string | number;
  height: string | number;
  fullWidth: boolean;
};

export type DropdownMenuStyleProps = {
  height: string | number;
};
