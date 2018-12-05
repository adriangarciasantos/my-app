import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {HttpClientModule} from '@angular/common/http';
import { registerLocaleData } from '@angular/common';
import localeFr from '@angular/common/locales/es';
registerLocaleData(localeFr);

// Componentes
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { VideojuegoDetalleComponent } from './components/videojuego-detalle/videojuego-detalle.component';
import { PipeComponent } from './components/pipe/pipe.component';
import { FrutaCardComponent } from './components/fruta-card/fruta-card.component';
import { ComparadorComponent } from './components/comparador/comparador.component';
import { TareaComponent } from './components/tarea/tarea.component';
import { FormularioComponent } from './components/formulario/formulario.component';
import { CrudFrutasComponent } from './components/crud-frutas/crud-frutas.component';

//Pipes
import { VideojuegoPipe } from './pipes/videojuego.pipe';
import { PersonaPipe } from './pipes/persona.pipe';
import { TareasPipe } from './pipes/tareas.pipe';

//Providers o servicios
import { FrutaService } from './providers/fruta.service';
import { TareaService } from './providers/tarea.service';

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
    PersonaPipe,
    FrutaCardComponent,
    ComparadorComponent,
    TareaComponent,
    TareasPipe,
    FormularioComponent,
    CrudFrutasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,  //Banana in a Box [(ngModule)]
    ReactiveFormsModule,
    HttpClientModule  //Peticiones Http
  ],
  providers: [
    FrutaService,
    TareaService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }						
