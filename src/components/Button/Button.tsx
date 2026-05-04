import { forwardRef, type ButtonHTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'danger';
export type ButtonSize = 'xs' | 'sm' | 'md' | 'lg' | 'xl';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  iconOnly?: boolean;
  round?: boolean;
  leadingIcon?: ReactNode;
  trailingIcon?: ReactNode;
}

const SIZE_CLASS: Record<ButtonSize, string> = {
  xs: 'eo-btn-xs',
  sm: 'eo-btn-sm',
  md: '',
  lg: 'eo-btn-lg',
  xl: 'eo-btn-xl',
};

export const Button = forwardRef<HTMLButtonElement, ButtonProps>(
  (
    {
      variant = 'primary',
      size = 'md',
      iconOnly = false,
      round = false,
      leadingIcon,
      trailingIcon,
      className,
      children,
      type = 'button',
      ...rest
    },
    ref
  ) => {
    return (
      <button
        ref={ref}
        type={type}
        className={cn(
          'eo-btn',
          `eo-btn-${variant}`,
          SIZE_CLASS[size],
          iconOnly && 'eo-btn-icon',
          iconOnly && round && 'eo-btn-round',
          className
        )}
        {...rest}
      >
        {leadingIcon}
        {children}
        {trailingIcon}
      </button>
    );
  }
);

Button.displayName = 'Button';
