import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { LoginComponent } from './components/login/login.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';

const routes: Routes = [
  { path: '', component: InicioComponent },
  { path: 'acerca-de-mi', component: AcercaDeComponent },
  { path: 'inicio', component: InicioComponent },
  { path: 'experiencia', component: ExperienciasComponent },
  { path: 'educacion', component: EducacionComponent },
  { path: 'proyectos', component: ProyectosComponent },
  { path: 'login', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { onSameUrlNavigation: 'reload' })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
