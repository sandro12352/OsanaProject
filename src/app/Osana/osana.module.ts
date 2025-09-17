import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { RouterModule } from '@angular/router';
import { ContactanosPageComponent } from './pages/cotizacion-page/contactanos-page.component';
import { ArquitecturaPageComponent } from './pages/arquitectura-page/arquitectura-page.component';
import { ArquitecturaRoutingModule } from './arquitectura-routing.module';
import { ByObraPageComponent } from './pages/by-obra-page/by-obra-page.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { FormularioContactoComponent } from './components/formulario-contacto/formulario-contacto.component';
import { LayoutPageComponent } from './pages/layout-page/layout-page.component';
import { SharedModule } from '../shared/shared.module';
import { InicioPageComponent } from './pages/inicio-page/inicio-page.component';



@NgModule({
  declarations: [
    InicioPageComponent,
    HeaderComponent,
    LoginComponent,
    NavLinksComponent,
    FooterComponent,
    ObrasComponent,
    ProyectosComponent,
    ContactanosPageComponent,
    ArquitecturaPageComponent,
    ByObraPageComponent,
    ServiciosComponent,
    FormularioContactoComponent,
    LayoutPageComponent,
  ],  
  exports:[
    LayoutPageComponent,
    
  ],
  imports: [
    CommonModule,
    SharedModule,
    RouterModule,
    ArquitecturaRoutingModule,
    ReactiveFormsModule
  ]
})
export class OsanaModule { }
