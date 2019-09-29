import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
// import * as fromRootComponents from '@ice-fire-song-app/components';
import * as fromRootContainers from '@ice-fire-song-app/containers';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  bootstrap: [fromRootContainers.AppComponent],
  declarations: [...fromRootContainers.containers],
  imports: [BrowserModule, AppRoutingModule]
})
export class AppModule {}
