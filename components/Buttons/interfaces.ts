export type { IButtonWithTextAndIconProps } from './Button';
export type { IIconButtonProps } from './IconButton';

export interface IBasicButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  type?: 'button' | 'submit' | 'reset';
  classes?: string[];
  variant?: 'primary' | 'secondary' | 'tertiary';
}
