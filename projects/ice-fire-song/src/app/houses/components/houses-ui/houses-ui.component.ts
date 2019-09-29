import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import * as fromRootEnums from '@ice-fire-song-app/enums';
import * as fromHousesModels from '@ice-fire-song-houses/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ifs-houses-ui',
  styleUrls: ['./houses-ui.component.scss'],
  templateUrl: './houses-ui.component.html'
})
export class HousesUiComponent {
  @Input() houses: fromHousesModels.House[];

  constructor(private router: Router) {}

  navigateToHouse(url: string): void {
    const houseId: string = this.stripHouseId(url);

    this.router.navigate([fromRootEnums.RouteFeature.houses, houseId]);
  }

  private stripHouseId(url: string): string {
    return url.match(/\d+$/)[0];
  }
}
