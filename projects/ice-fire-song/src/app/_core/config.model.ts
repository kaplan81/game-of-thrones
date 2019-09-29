export type ApiFeature = 'books' | 'characters' | 'houses';

export interface ConfigFile {
  app: AppConfig;
  api: ApiConfig;
}

export interface ApiConfig {
  base: string;
  paths: ApiPath;
}

export interface ApiPath {
  features: FeaturePath;
}

export interface FeaturePath {
  books: ApiFeature;
  characters: ApiFeature;
  houses: ApiFeature;
}

export interface AppConfig {
  base: string;
}
