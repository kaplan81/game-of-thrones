import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import * as fromHousesModels from '@ice-fire-song-houses/models';
import { HousesService } from '@ice-fire-song-houses/services/houses.service';
import { Observable } from 'rxjs';
import { switchMap } from 'rxjs/operators';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./house.component.scss'],
  templateUrl: './house.component.html'
})
export class HouseComponent implements OnInit {
  house$: Observable<fromHousesModels.House>;

  constructor(private housesService: HousesService, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.house$ = this.route.paramMap.pipe(
      switchMap(
        (params: ParamMap): Observable<fromHousesModels.House> => {
          return this.housesService.getHouse(+params.get('houseId'));
        }
      )
    );
  }
}
