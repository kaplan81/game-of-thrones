import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { HousesService } from '@ice-fire-song-houses/services/houses.service';
import { Observable } from 'rxjs';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./houses.component.scss'],
  templateUrl: './houses.component.html'
})
export class HousesComponent implements OnInit {
  houses$: Observable<any>;

  constructor(private housesService: HousesService) {}

  ngOnInit(): void {
    this.houses$ = this.housesService.getHouses();
  }
}
