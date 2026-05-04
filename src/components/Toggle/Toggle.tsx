import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

export interface ToggleProps
  extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type' | 'size'> {
  label?: ReactNode;
  description?: ReactNode;
  containerClassName?: string;
}

export const Toggle = forwardRef<HTMLInputElement, ToggleProps>(
  (
    { label, description, id, className, containerClassName, ...rest },
    ref
  ) => {
    const generated = useId();
    const toggleId = id ?? `eo-toggle-${generated}`;

    const switchEl = (
      <span className={cn('eo-toggle', className)}>
        <input ref={ref} id={toggleId} type="checkbox" {...rest} />
        <span className="eo-toggle-track" aria-hidden="true" />
        <span className="eo-toggle-thumb" aria-hidden="true" />
      </span>
    );

    if (!label && !description) return switchEl;

    return (
      <label
        htmlFor={toggleId}
        className={cn(
          'eo-flex eo-items-center eo-gap-3',
          containerClassName
        )}
        style={{ cursor: 'pointer' }}
      >
        {switchEl}
        <span style={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
          {label && (
            <span style={{ fontSize: 14, fontWeight: 500 }}>{label}</span>
          )}
          {description && (
            <span
              style={{
                fontSize: 12,
                color: 'var(--eo-text-tertiary)',
                fontFamily: 'var(--eo-font-mono)',
              }}
            >
              {description}
            </span>
          )}
        </span>
      </label>
    );
  }
);

Toggle.displayName = 'Toggle';
