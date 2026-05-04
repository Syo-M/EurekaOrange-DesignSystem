import {
  forwardRef,
  useId,
  type InputHTMLAttributes,
  type ReactNode,
} from 'react';
import { cn } from '../../utils/cn';

export interface InputProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'prefix' | 'suffix'> {
  label?: string;
  hint?: string;
  error?: string;
  prefix?: ReactNode;
  suffix?: ReactNode;
  containerClassName?: string;
}

export const Input = forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      hint,
      error,
      prefix,
      suffix,
      id,
      className,
      containerClassName,
      ...rest
    },
    ref
  ) => {
    const generated = useId();
    const inputId = id ?? `eo-input-${generated}`;
    const hintId = hint ? `${inputId}-hint` : undefined;
    const errorId = error ? `${inputId}-error` : undefined;

    const describedBy =
      [errorId, hintId].filter(Boolean).join(' ') || undefined;

    return (
      <div className={cn('eo-form-group', containerClassName)}>
        {label && (
          <label htmlFor={inputId} className="eo-form-label">
            {label}
          </label>
        )}
        <div className="eo-input-group">
          {prefix && <span className="eo-input-prefix">{prefix}</span>}
          <input
            ref={ref}
            id={inputId}
            aria-invalid={error ? 'true' : undefined}
            aria-describedby={describedBy}
            className={cn('eo-input', error && 'eo-input-error', className)}
            {...rest}
          />
          {suffix && <span className="eo-input-suffix">{suffix}</span>}
        </div>
        {error ? (
          <span id={errorId} className="eo-form-error" role="alert">
            {error}
          </span>
        ) : hint ? (
          <span id={hintId} className="eo-form-hint">
            {hint}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
