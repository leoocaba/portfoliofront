import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SocaloSuperiorComponent } from './components/socalo-superior/socalo-superior.component';
import { HeaderComponent } from './components/header/header.component';
import { LogoIdevComponent } from './components/logo-idev/logo-idev.component';
import { LogoAPComponent } from './components/logo-ap/logo-ap.component';
import { MenuUlComponent } from './components/menu-ul/menu-ul.component';
import { InicioComponent } from './components/inicio/inicio.component';
import { SaludoInicioComponent } from './components/saludo-inicio/saludo-inicio.component';
import { BtnCtaComponent } from './components/btn-cta/btn-cta.component';
import { ImgPerfilInicioComponent } from './components/img-perfil-inicio/img-perfil-inicio.component';
import { AppRoutingModule } from './app-routing.module';
import { FooterComponent } from './components/footer/footer.component';
import { AcercaDeComponent } from './components/acerca-de/acerca-de.component';
import { ExperienciasComponent } from './components/experiencias/experiencias.component';
import { ExperienciaComponent } from './components/experiencia/experiencia.component';
import { EducacionComponent } from './components/educacion/educacion.component';
import { ItemEducacionComponent } from './components/item-educacion/item-educacion.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { ProyectoComponent } from './components/proyecto/proyecto.component';
import { LoginComponent } from './components/login/login.component';
import { NgCircleProgressModule } from 'ng-circle-progress';
import { HardSoftSkillsComponent } from './components/hard-soft-skills/hard-soft-skills.component';
import { HttpClientModule } from '@angular/common/http';
import { ObjToArrayPipe } from './objToArray.pipe';


@NgModule({
  declarations: [
    AppComponent,
    SocaloSuperiorComponent,
    HeaderComponent,
    LogoIdevComponent,
    LogoAPComponent,
    MenuUlComponent,
    InicioComponent,
    SaludoInicioComponent,
    BtnCtaComponent,
    ImgPerfilInicioComponent,
    FooterComponent,
    AcercaDeComponent,
    ExperienciasComponent,
    ExperienciaComponent,
    EducacionComponent,
    ItemEducacionComponent,
    ProyectosComponent,
    ProyectoComponent,
    LoginComponent,
    HardSoftSkillsComponent,
    ObjToArrayPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgCircleProgressModule.forRoot({}),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
