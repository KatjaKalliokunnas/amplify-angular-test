import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ExpencesComponent } from './expences/expences.component';
import { RouterOutlet } from '@angular/router';
import { AmplifyAuthenticatorModule } from '@aws-amplify/ui-angular';

@NgModule({
  declarations: [AppComponent, ExpencesComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterOutlet,
    AmplifyAuthenticatorModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
