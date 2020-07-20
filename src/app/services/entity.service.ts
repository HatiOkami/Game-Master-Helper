export abstract class LocalEntityService {
  public abstract createInstance(data?: any): any;
}

export abstract class EntityService<T> extends LocalEntityService {
  public static readonly alias?: string;
  protected servicePrefix: string;

  protected constructor() {
    super();
  }

  public createInstance(data?: T): T {
    const instance = this._createInstance(Object.assign({}, this._getDefaultData(), data));
    return instance;
  }

  protected abstract _createInstance(data: any): T;
  protected abstract _getDefaultData(): T;
}
