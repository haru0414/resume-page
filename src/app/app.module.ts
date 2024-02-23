import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DetailComponent } from './detail/detail.component';
import { ListBtnComponent } from './list-btn/list-btn.component';
import { PortffolioComponent } from './portffolio/portffolio.component';
import { ConnectionComponent } from './connection/connection.component';
import { register } from 'swiper/element/bundle';
import { DynamicProfileComponent } from './dynamic-profile/dynamic-profile.component';
import { DetailBarComponent } from './detail-bar/detail-bar.component';
import { HttpClientModule } from '@angular/common/http';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    DetailComponent,
    ListBtnComponent,
    PortffolioComponent,
    ConnectionComponent,
    DynamicProfileComponent,
    DetailBarComponent,
  ],
  imports: [BrowserModule, HttpClientModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
