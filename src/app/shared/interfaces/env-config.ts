export interface EnvConfig {
  apiUrl: string;
  apiVersion: string;
  production: boolean;
  versions: {
    branch: string;
    revision: string;
    version: string;
  };
}
