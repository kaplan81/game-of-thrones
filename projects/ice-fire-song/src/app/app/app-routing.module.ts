import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromRootEnums from '@ice-fire-song-app/enums';

export const housesPath: fromRootEnums.RouteFeatureET = fromRootEnums.RouteFeature.houses;
export const redirectTo = `/${housesPath}`;

const routes: Routes = [
  {
    // Dynamic import can only take plain string!
    loadChildren: () => import('../houses/houses.module').then(mod => mod.HousesModule),
    path: housesPath
  },
  {
    path: fromRootEnums.RouteCommons.wildcard,
    redirectTo
  }
];

@NgModule({
  exports: [RouterModule],
  // imports: [RouterModule.forRoot(routes, { enableTracing: true })],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule {}
