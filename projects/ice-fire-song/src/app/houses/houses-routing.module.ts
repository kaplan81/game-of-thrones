import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import * as fromRootEnums from '@ice-fire-song-app/enums';

export const housesPath: fromRootEnums.RouteFeatureET = fromRootEnums.RouteFeature.houses;

const routes: Routes = [
  {
    path: fromRootEnums.RouteCommons.empty,
    pathMatch: 'full',
    redirectTo: housesPath
  }
  // {
  //   path: housesPath,
  //   component: TicketsComponent
  // },
  // {
  //   path: 'ticket/:ticketId',
  //   component: TicketDetailComponent
  // }
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forChild(routes)]
})
export class HousesRoutingModule {}
