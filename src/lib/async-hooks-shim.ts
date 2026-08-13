export class AsyncLocalStorage<T = any> {
  disable() {}
  getStore(): T | undefined {
    return undefined;
  }
  run<R>(store: T, callback: (...args: any[]) => R, ...args: any[]): R {
    return callback(...args);
  }
  exit<R>(callback: (...args: any[]) => R, ...args: any[]): R {
    return callback(...args);
  }
  enterWith(store: T) {}
}

export default {
  AsyncLocalStorage,
};
