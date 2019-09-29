/* tslint:disable:no-unused-variable */
import { TestBed } from '@angular/core/testing';
import { ConfigFileService } from '@got/ng-kit';
import * as fromCoreModels from '@ice-fire-song-core/config.model';
import { ConfigService } from '@ice-fire-song-core/config.service';
import { of } from 'rxjs';

const configFileMock: fromCoreModels.ConfigFile = {
  api: {
    base: 'https://www.anapioficeandfire.com',
    paths: {
      features: {
        books: 'books',
        characters: 'characters',
        houses: 'houses'
      }
    }
  },
  app: {
    base: 'http://localhost:1981'
  }
};

const configFileServiceMock = jest.fn<ConfigFileService>(() => ({
  configFile: jest.fn(() => of(configFileMock))
}));

describe('ConfigService', () => {
  let configService: ConfigService;
  let fileService: ConfigFileService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [{ provide: ConfigFileService, useClass: configFileServiceMock }]
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

    expect(configService.app).toEqual(fileService.configs.app);
    expect(configService.apiBase).toEqual(fileService.configs.api.base);
    expect(configService.apiPathFeatures).toEqual(fileService.configs.api.paths.features);
    expect(configService.apiPathSegments).toEqual(fileService.configs.api.paths.segments);
    expect(configService.apiPathEndpoints).toEqual(fileService.configs.api.paths.endpoints);
  });
});
