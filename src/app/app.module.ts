import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule}   from '@angular/forms';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
registerLocaleData(localeFr);

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { PersonaPipe } from './pipes/persona.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FrutaComponent,
    ListadoClaseComponent,
    FlujoInformacionComponent,
    HomeComponent,
    Page404Component,
    VideojuegoDetalleComponent,
    PipeComponent,
    VideojuegoPipe,
    PersonaPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }						
