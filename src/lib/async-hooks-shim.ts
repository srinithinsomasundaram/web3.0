const dummyContext = {
  request: typeof window !== "undefined" ? new Request(window.location.href) : undefined,
  responseHeaders: typeof Headers !== "undefined" ? new Headers() : {},
  contextAfterGlobalMiddlewares: {},
};

export class AsyncLocalStorage<T = any> {
  private store: T | undefined = dummyContext as unknown as T;

  disable() {}
  getStore(): T | undefined {
    return this.store ?? (dummyContext as unknown as T);
  }
  run<R>(store: T, callback: (...args: any[]) => R, ...args: any[]): R {
    const prev = this.store;
    this.store = store;
    try {
      return callback(...args);
    } finally {
      this.store = prev;
    }
  }
  exit<R>(callback: (...args: any[]) => R, ...args: any[]): R {
    return callback(...args);
  }
  enterWith(store: T) {
    this.store = store;
  }
}

export function getStartContext(opts?: { throwIfNotFound?: boolean }) {
  return dummyContext;
}

export async function runWithStartContext(context: any, fn: () => any) {
  return fn();
}

export default {
  AsyncLocalStorage,
  getStartContext,
  runWithStartContext,
};
