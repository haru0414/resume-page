import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ProfileComponent } from './profile/profile.component';
import { DetailComponent } from './detail/detail.component';
import { ListBtnComponent } from './list-btn/list-btn.component';
import { PortffolioComponent } from './portffolio/portffolio.component';
import { ConnectionComponent } from './connection/connection.component';
// import function to register Swiper custom elements
import { register } from 'swiper/element/bundle';
// register Swiper custom elements
register();
@NgModule({
  declarations: [
    AppComponent,
    ProfileComponent,
    DetailComponent,
    ListBtnComponent,
    PortffolioComponent,
    ConnectionComponent,
  ],
  imports: [BrowserModule, AppRoutingModule],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class AppModule {}
