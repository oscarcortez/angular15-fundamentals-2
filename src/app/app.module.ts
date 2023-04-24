import { LOCALE_ID, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NuevaTransferenciaComponent } from './nueva-transferencia/nueva-transferencia.component';
import { EstadoCuentaComponent } from './estado-cuenta/estado-cuenta.component';
import { FormsModule } from '@angular/forms';
import localeEs from "@angular/common/locales/es-BO"
import { registerLocaleData } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing';

registerLocaleData(localeEs, "es")
@NgModule({
  declarations: [
    AppComponent,
    NuevaTransferenciaComponent,
    EstadoCuentaComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpClientModule,
    AppRoutingModule
  ],
  providers: [
    {provide: LOCALE_ID, useValue: "es"}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
