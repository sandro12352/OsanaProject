import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './Osana/components/main/main.component';
import { ContactanosPageComponent } from './Osana/pages/cotizacion-page/contactanos-page.component';
import { ArquitecturaPageComponent } from './Osana/pages/arquitectura-page/arquitectura-page.component';
import { TiendaPageComponent } from './Osana/pages/tienda-page/tienda-page.component';


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
    path:"cotizacion",
    component:ContactanosPageComponent
  },
  {
    path:"tienda",
    component:TiendaPageComponent
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
