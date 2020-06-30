import { Injectable } from '@angular/core';

import { environment } from '../../../environments/environment';

@Injectable({ providedIn: 'root' })
export class ConfigurationService {
  private settings: any;

  constructor() {}

  getConfigurationUrl() {
    return environment;
  }

  init(): Promise<any> {
    return new Promise((resolve, reject) => {
      const xhr = new XMLHttpRequest();
      xhr.open('GET', 'assets/env-config.json');

      xhr.addEventListener('readystatechange', () => {
        if (xhr.readyState === XMLHttpRequest.DONE && xhr.status === 200) {
          this.settings = JSON.parse(xhr.responseText);
          environment.apiUrl = this.settings.apiUrl;
          environment.identityProvider = this.settings.identityProvider;
          environment.apiVersion = this.settings.apiVersion;
          resolve();
        } else if (xhr.readyState === XMLHttpRequest.DONE) {
          reject();
        }
      });

      xhr.send(null);
    });
  }
}
