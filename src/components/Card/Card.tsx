import { type HTMLAttributes } from 'react';
import { cn } from '../../utils/cn';

export type CardSize = 'sm' | 'md' | 'lg';

export interface CardProps extends HTMLAttributes<HTMLDivElement> {
  size?: CardSize;
  bordered?: boolean;
  glow?: boolean;
}

const SIZE_CLASS: Record<CardSize, string> = {
  sm: 'eo-card-sm',
  md: '',
  lg: 'eo-card-lg',
};

export function Card({
  size = 'md',
  bordered = true,
  glow = false,
  className,
  children,
  ...rest
}: CardProps) {
  return (
    <div
      className={cn(
        'eo-card',
        SIZE_CLASS[size],
        !bordered && 'eo-border-0',
        glow && 'eo-shadow-glow-sm',
        className
      )}
      {...rest}
    >
      {children}
    </div>
  );
}
