import DependencyManager from './manager';

import manager from './manager';

export function Inject(key: string) {
  return function (classInstance: any, propertyName: string) {
    Object.defineProperty(classInstance, propertyName, {
      get: () => {
        return manager.get(key);
      },
      enumerable: true,
      configurable: true,
    });
  };
}

export function Injectable(key: string): Function {
  return function (InjectableClass: { new () }) {
    manager.set(key, new InjectableClass());
  };
}
