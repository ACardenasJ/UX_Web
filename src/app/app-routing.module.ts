import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ApuestaCreateComponent } from './apuesta/apuesta-create/apuesta-create.component';
import { ApuestaEditComponent } from './apuesta/apuesta-edit/apuesta-edit.component';
import { ApuestaListComponent } from './apuesta/apuesta-list/apuesta-list.component';
import { CarreraCreateComponent } from './carrera/carrera-create/carrera-create.component';
import { CarreraEditComponent } from './carrera/carrera-edit/carrera-edit.component';
import { CarreraFinishComponent } from './carrera/carrera-finish/carrera-finish.component';
import { CarreraListComponent } from './carrera/carrera-list/carrera-list.component';
import { CarreraReportComponent } from './carrera/carrera-report/carrera-report.component';
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
