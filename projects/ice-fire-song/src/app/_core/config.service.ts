import { Injectable } from '@angular/core';
import { ConfigFileService } from '@got/ng-kit';
import * as fromCoreModels from '@ice-fire-song-core/config.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ConfigService {
  constructor(private configFileService: ConfigFileService) {}

  loadConfig(): Observable<fromCoreModels.ConfigFile> {
    return this.configFileService.configFile<fromCoreModels.ConfigFile>();
  }

  get app(): fromCoreModels.ConfigApp {
    return this.configFileService.configs.app;
  }

  get apiBase(): string {
    return this.configFileService.configs.api.base;
  }

  get apiPathFeatures(): fromCoreModels.FeaturePaths {
    return this.configFileService.configs.api.paths.features;
  }

  get apiPathSegments(): fromCoreModels.SegmentPaths {
    return this.configFileService.configs.api.paths.segments;
  }

  get apiPathEndpoints(): fromCoreModels.EndpointPaths {
    return this.configFileService.configs.api.paths.endpoints;
  }
}
