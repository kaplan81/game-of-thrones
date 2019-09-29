import { Injectable } from '@angular/core';
import { ConfigFileService } from '@got/ng-kit';
import * as fromCoreModels from '@ice-fire-song-core/config.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private configFileService: ConfigFileService<fromCoreModels.ConfigFile>) {}

  loadConfig(): Observable<fromCoreModels.ConfigFile> {
    return this.configFileService.configFile();
  }

  get appBase(): string {
    return (this.configFileService.configs as fromCoreModels.ConfigFile).app.base;
  }

  get apiBase(): string {
    return (this.configFileService.configs as fromCoreModels.ConfigFile).api.base;
  }

  get apiPathFeatures(): fromCoreModels.FeaturePath {
    return (this.configFileService.configs as fromCoreModels.ConfigFile).api.paths.features;
  }
}
