import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/header/header.component';
import { RentalModule } from './rental/rental.module';
// import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { RentalCardComponent } from './shared/rental-card/rental-card.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    // RentalCardComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule, 
    RentalModule,
    // AngularFontAwesomeModule
  ],
  exports: [
    // RentalCardComponent
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
