import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EstadoCuentaComponent } from "./estado-cuenta/estado-cuenta.component";
import { NuevaTransferenciaComponent } from "./nueva-transferencia/nueva-transferencia.component";

export const routes: Routes = [
  {
    path: '',
    redirectTo: 'estado',
    pathMatch: 'full'
  }, {
    path: 'estado',
    component: EstadoCuentaComponent
  }, {
    path: 'nueva-transferencia',
    component: NuevaTransferenciaComponent
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})

export class AppRoutingModule {}
