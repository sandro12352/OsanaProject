import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InmobiliariaPageComponent } from './Osona/pages/inmobiliaria-page/inmobiliaria-page.component';
import { MainComponent } from './Osona/components/main/main.component';
import { ContactanosPageComponent } from './Osona/pages/cotizacion-page/contactanos-page.component';
import { ArquitecturaPageComponent } from './Osona/pages/arquitectura-page/arquitectura-page.component';
import { TiendaPageComponent } from './Osona/pages/tienda-page/tienda-page.component';


const routes: Routes = [
  {
    path:"",
    component:MainComponent
  },
  {
    path:"proyectos",
    component:ArquitecturaPageComponent
    
  },
  
  {
    path:"inmobiliaria",
    component:InmobiliariaPageComponent
  },
  {
    path:"cotizacion",
    component:ContactanosPageComponent
  },
  {
    path:"tienda",
    component:TiendaPageComponent
  },
  {
    path:"obra",
    loadChildren:()=>import('./Osona/osona.module').then(m=>m.OsonaModule)
  },
 
  {
    path:"**",
    redirectTo:''
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
