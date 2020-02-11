export interface EnvConfig {
  apiUrl: string;
  production: boolean;
  versions: {
    branch: string;
    revision: string;
    version: string;
  };
}
