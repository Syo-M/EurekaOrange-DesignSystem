/**
 * Tiny class-name joiner. Filters out falsy values.
 *   cn('a', cond && 'b', undefined, 'c') -> 'a b c'
 */
export function cn(
  ...args: Array<string | false | null | undefined>
): string {
  return args.filter(Boolean).join(' ');
}
