import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UsuarioLoginComponent } from './usuario/usuario-login/usuario-login.component';
import { UsuarioSignupComponent } from './usuario/usuario-signup/usuario-signup.component';
import { CompetidorListComponent } from './competidor/competidor-list/competidor-list.component';
import { EventoDeportivoListComponent} from './evento-deportivo/evento-deportivo-list/evento-deportivo-list.component';
import { EventoDeportivoCreateComponent } from './evento-deportivo/evento-deportivo-create/evento-deportivo-create.component';
import { EventoDeportivoDetailComponent } from './evento-deportivo/evento-deportivo-detail/evento-deportivo-detail.component';

const routes: Routes = [
  {
    path: '',
    component: UsuarioLoginComponent,
    pathMatch: 'full'
  },
  {
    path: 'main-menu',
    component: UsuarioSignupComponent,
    pathMatch: 'full'
  },
  {
    path: 'alarmaClasica',
    component: CompetidorListComponent
  },
  {
    path: 'alarmaVoz',
    component: EventoDeportivoCreateComponent
  },
  {
    path: 'alarmaPersonalizada',
    component: EventoDeportivoDetailComponent
  },
  {
    path: 'listaAlarmas',
    component: EventoDeportivoListComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
