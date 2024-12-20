import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './components/header/header.component';
import { LoginComponent } from './components/login/login.component';
import { NavLinksComponent } from './components/nav-links/nav-links.component';
import { SearchBoxComponent } from './components/search-box/search-box.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { MainComponent } from './components/main/main.component';
import { FooterComponent } from './components/footer/footer.component';
import { ObrasComponent } from './components/obras/obras.component';
import { ProyectosComponent } from './components/proyectos/proyectos.component';
import { InmobiliariaPageComponent } from './pages/inmobiliaria-page/inmobiliaria-page.component';
import { RouterModule } from '@angular/router';
import { ContactanosPageComponent } from './pages/cotizacion-page/contactanos-page.component';
import { ArquitecturaPageComponent } from './pages/arquitectura-page/arquitectura-page.component';
import { TiendaPageComponent } from './pages/tienda-page/tienda-page.component';
import { ArquitecturaRoutingModule } from './arquitectura-routing.module';
import { ByObraPageComponent } from './pages/by-obra-page/by-obra-page.component';
import { ReactiveFormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    HeaderComponent,
    LoginComponent,
    NavLinksComponent,
    SearchBoxComponent,
    HomePageComponent,
    MainComponent,
    FooterComponent,
    ObrasComponent,
    ProyectosComponent,
    InmobiliariaPageComponent,
    ContactanosPageComponent,
    ArquitecturaPageComponent,
    TiendaPageComponent,
    ByObraPageComponent,
  ],  
  exports:[
    HomePageComponent,
    
  ],
  imports: [
    CommonModule,
    RouterModule,
    ArquitecturaRoutingModule,
    ReactiveFormsModule
  ]
})
export class OsonaModule { }
