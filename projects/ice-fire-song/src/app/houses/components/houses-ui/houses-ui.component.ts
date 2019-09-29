import { ChangeDetectionStrategy, Component, Input } from '@angular/core';
import * as fromHousesModels from '@ice-fire-song-houses/models';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  selector: 'ifs-houses-ui',
  styleUrls: ['./houses-ui.component.scss'],
  templateUrl: './houses-ui.component.html'
})
export class HousesUiComponent {
  @Input() houses: fromHousesModels.House[];
}
