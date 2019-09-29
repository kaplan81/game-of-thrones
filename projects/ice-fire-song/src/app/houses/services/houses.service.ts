import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ErrorService } from '@got/ng-kit';
import { ApiFeature } from '@ice-fire-song-core/config.model';
import { ConfigService } from '@ice-fire-song-core/config.service';
import * as fromHousesModels from '@ice-fire-song-houses/models';
import { Observable } from 'rxjs';
import { catchError } from 'rxjs/operators';

/**
 * HTTP service to retrieve GOT houses.
 */
@Injectable({
  providedIn: 'root'
})
export class HousesService {
  private readonly _housesPath: ApiFeature = 'houses';
  private readonly _housesUrl: string;

  constructor(
    private configService: ConfigService,
    private errorService: ErrorService,
    private http: HttpClient
  ) {
    this._housesUrl = `${this.configService.apiBase}/${this._housesPath}`;
  }

  getHouse(houseId: number): Observable<fromHousesModels.House> {
    const url = `${this._housesUrl}/${houseId}`;

    return this.http.get<any>(url).pipe(catchError(this.errorService.handleHttpError('getHouse')));
  }

  getHouses(): Observable<fromHousesModels.House[]> {
    return this.http
      .get<any>(this._housesUrl)
      .pipe(catchError(this.errorService.handleHttpError('getHouses')));
  }
}
