import { InjectionToken } from '@angular/core';

import { EnvConfig } from './interfaces/env-config';

export let ENV_CONFIG = new InjectionToken<EnvConfig>('configuration based on environment');

export const DEFAULT_CONFIG: EnvConfig = {
  production: false,
  apiUrl: '',
  apiVersion: '',
  versions: {
    version: '',
    revision: '',
    branch: ''
  }
};
