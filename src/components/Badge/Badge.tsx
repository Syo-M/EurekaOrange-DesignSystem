import { type HTMLAttributes, type ReactNode } from 'react';
import { cn } from '../../utils/cn';

export type BadgeVariant =
  | 'default'
  | 'success'
  | 'warning'
  | 'error'
  | 'info'
  | 'neutral';

export interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
  icon?: ReactNode;
}

export function Badge({
  variant = 'default',
  icon,
  className,
  children,
  ...rest
}: BadgeProps) {
  return (
    <span className={cn('eo-badge', `eo-badge-${variant}`, className)} {...rest}>
      {icon}
      {children}
    </span>
  );
}
