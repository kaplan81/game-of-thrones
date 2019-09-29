import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./houses.component.scss'],
  templateUrl: './houses.component.html'
})
export class HousesComponent {}
