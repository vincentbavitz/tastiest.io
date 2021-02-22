const isServer = typeof window === 'undefined';

export function runOnServer(
  fn: <T extends unknown[], R = unknown>(...args: T) => R,
) {
  if (isServer && fn?.caller) {
    return fn();
  }
}
