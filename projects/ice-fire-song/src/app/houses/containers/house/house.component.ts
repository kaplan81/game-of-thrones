import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import * as fromHousesModels from '@ice-fire-song-houses/models';
import { HousesService } from '@ice-fire-song-houses/services/houses.service';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./house.component.scss'],
  templateUrl: './house.component.html'
})
export class HouseComponent implements OnInit {
  house$: Observable<fromHousesModels.House>;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.house$ = this.housesService.getHouse(1);
  }
}
