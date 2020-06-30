import { Injector } from '@angular/core';

export class AliasInjector {
  private static _injector: Injector;

  public static createAliases(parent: Injector, baseProviders: any[]) {
    const providers = [];
    baseProviders
      .filter(p => !!p.alias)
      .forEach((provider: any) => {
        providers.push({
          provide: String(provider.alias),
          useFactory: (injector: Injector) => injector.get<any>(provider),
          deps: [Injector],
        } as any);
      });
    AliasInjector._injector = Injector.create({
      parent,
      providers,
      name,
    });
  }

  public static get(provider: any, notFoundValue?: any): any {
    if (!AliasInjector._injector) {
      return notFoundValue;
    }
    return AliasInjector._injector.get<any>(provider, notFoundValue);
  }
}
