import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { catchError, take, tap } from 'rxjs/operators';
import { ErrorService } from '../error/error.service';

export const configFileparams = new HttpParams()
  .set('configRequest', 'jsonFile')
  .append(`v`, `${new Date().getTime()}`);

/**
 * Get config.json
 */
@Injectable({
  providedIn: 'root'
})
export class ConfigFileService<T> {
  get configs(): any {
    return this._configs;
  }
  set configs(configs: any) {
    this._configs = configs;
  }
  private _configs: any;

  constructor(private errorService: ErrorService, private http: HttpClient) {}

  configFile(): Observable<T> {
    return this.http.get<T>('config.json', { params: configFileparams }).pipe(
      tap((configFile: T) => (this.configs = configFile)),
      take(1),
      catchError(this.errorService.handleHttpError('loadConfig'))
    );
  }
}
