import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FlujoInformacionComponent } from './components/flujo-informacion/flujo-informacion.component';
import { FrutaComponent } from './components/fruta/fruta.component';
import { HomeComponent } from './components/home/home.component';
import { Page404Component } from './components/page404/page404.component';
import { ListadoClaseComponent } from './components/listado-clase/listado-clase.component';

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'fruta', component: FrutaComponent},
  {path: 'lista', component: ListadoClaseComponent},
  {path: 'flujo', component: FlujoInformacionComponent},
  {path: '', redirectTo: '/home', pathMatch: 'full'},
  {path: '**', component: Page404Component}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
