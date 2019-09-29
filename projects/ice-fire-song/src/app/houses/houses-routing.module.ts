/* tslint:disable: object-literal-sort-keys */
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromRootEnums from '@ice-fire-song-app/enums';
import * as fromHousesContainers from '@ice-fire-song-houses/containers';

export const housesPath: fromRootEnums.RouteFeatureET = fromRootEnums.RouteFeature.houses;

const routes: Routes = [
  {
    component: fromHousesContainers.HousesComponent,
    path: fromRootEnums.RouteCommons.empty,
    children: [
      // {
      //   path: 'houses/:houseId',
      //   component: HouseComponent
      // }
    ]
  }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HousesRoutingModule {}
