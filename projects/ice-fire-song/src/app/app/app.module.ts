import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import * as fromRootComponents from '@ice-fire-song-app/components';
import * as fromRootContainers from '@ice-fire-song-app/containers';
import { CoreModule } from '@ice-fire-song-core/core.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [fromRootContainers.AppComponent],
  declarations: [...fromRootContainers.containers],
  imports: [BrowserModule, HttpClientModule, CoreModule, AppRoutingModule]
})
export class AppModule {}
