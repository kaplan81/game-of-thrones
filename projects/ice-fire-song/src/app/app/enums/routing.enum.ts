export enum RouteCommons {
  empty = '',
  root = '/',
  wildcard = '**'
}

export enum RouteFeature {
  houses = 'houses'
}
export type RouteFeatureET = keyof typeof RouteFeature;
