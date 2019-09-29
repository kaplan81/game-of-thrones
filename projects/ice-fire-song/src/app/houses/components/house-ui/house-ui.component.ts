import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as fromHousesModels from '@ice-fire-song-houses/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ifs-house-ui',
  styleUrls: ['./house-ui.component.scss'],
  templateUrl: './house-ui.component.html'
})
export class HouseUiComponent {
  @Input() house: fromHousesModels.House;

  isNonEmptyAttribute(attr: string | string[]): boolean {
    return attr.length > 0 && attr[0].length > 0;
  }
}
