import { NgModule } from '@angular/core';
import * as fromHousesComponents from '@ice-fire-song-houses/components';
import * as fromHousesContainers from '@ice-fire-song-houses/containers';
import { HousesRoutingModule } from '@ice-fire-song-houses/houses-routing.module';
import { SharedModule } from '@ice-fire-song-shared/shared.module';

@NgModule({
  declarations: [...fromHousesContainers.containers, ...fromHousesComponents.components],
  imports: [HousesRoutingModule, SharedModule]
})
export class HousesModule {}
