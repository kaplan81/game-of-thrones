import { APP_INITIALIZER, NgModule, Optional, SkipSelf } from '@angular/core';
import { ConfigFileModule, ErrorModule, RouterEventsModule } from '@got/ng-kit';
import { ConfigService } from '@ice-fire-song-core/config.service';

export function appInitializerFactory(configService: ConfigService): Function {
  return () => configService.loadConfig().toPromise();
}

/**
 * CoreModule will mainly be in charge of implementing injection tokens such as:
 * APP_INITIALIZER for our configuration file.
 * HTTP_INTERCEPTORS for our interceptors.
 *
 * It will also import ng-kit services in the shape of ng modules.
 */
@NgModule({
  providers: [
    {
      provide: APP_INITIALIZER,
      useFactory: appInitializerFactory,
      deps: [ConfigService],
      multi: true
    }
  ],
  imports: [ConfigFileModule, ErrorModule, RouterEventsModule]
})
export class CoreModule {
  constructor(
    @Optional()
    @SkipSelf()
    parentModule: CoreModule
  ) {
    // Prevent reimport of the CoreModule.
    if (parentModule) {
      throw new Error('CoreModule is already loaded. Import it in the AppModule ONLY');
    }
  }
}
