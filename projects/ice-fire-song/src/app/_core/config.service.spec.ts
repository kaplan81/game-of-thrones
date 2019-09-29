import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ConfigFileService } from '@got/ng-kit';
import * as fromCoreModels from '@ice-fire-song-core/config.model';
import { ConfigService } from '@ice-fire-song-core/config.service';
import { Observable, of } from 'rxjs';
import * as configFile from '../../../config.json';

const configFileMock = configFile as fromCoreModels.ConfigFile;

export class ConfigFileServiceMock extends ConfigFileService<fromCoreModels.ConfigFile> {
  configFile(): Observable<fromCoreModels.ConfigFile> {
    return of(configFileMock);
  }
}

describe('ConfigService', () => {
  let configService: ConfigService;
  let fileService: ConfigFileService<fromCoreModels.ConfigFile>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [{ provide: ConfigFileService, useClass: ConfigFileServiceMock }]
    });
    configService = TestBed.get(ConfigService);
    fileService = TestBed.get(ConfigFileService);
  });

  it('can be instantiated via DI', () => {
    expect(configService instanceof ConfigService).toBe(true);
  });

  it('gets its properties from ConfigFileService', async () => {
    async function appInitializer(): Promise<fromCoreModels.ConfigFile> {
      return await configService.loadConfig().toPromise();
    }
    fileService.configs = await appInitializer();

    expect(configService.appBase).toEqual(fileService.configs.app.base);
    expect(configService.apiBase).toEqual(fileService.configs.api.base);
    expect(configService.apiPathFeatures).toEqual(fileService.configs.api.paths.features);
  });
});
