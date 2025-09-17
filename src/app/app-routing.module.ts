import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactanosPageComponent } from './Osana/pages/cotizacion-page/contactanos-page.component';
import { ArquitecturaPageComponent } from './Osana/pages/arquitectura-page/arquitectura-page.component';
import { InicioPageComponent } from './Osana/pages/inicio-page/inicio-page.component';


const routes: Routes = [
  {
    path:"",
    component:InicioPageComponent,
  },
  {
    path:"proyectos",
    component:ArquitecturaPageComponent
    
  },
  {
    path:"cotizacion",
    component:ContactanosPageComponent
  },
  
  {
    path:"obra",
    loadChildren:()=>import('./Osana/osana.module').then(m=>m.OsanaModule)
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
