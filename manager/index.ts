import { DependenciesMapping } from './modules';

class DependencyManager {
  private deps: Record<string, any>;

  constructor() {
    this.deps = {};
    DependenciesMapping.forEach(({ key, value }) => {
      this.set(key, new value());
    });
  }

  get(key: string) {
    const matchs = this.deps[key];
    if (!matchs) throw new Error('No matchs found');
    return matchs;
  }
  set(key: string, dep: any) {
    this.deps[key] = dep;
  }
}

export default new DependencyManager();
