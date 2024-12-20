import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ByObraPageComponent } from './pages/by-obra-page/by-obra-page.component';


const routes:Routes = [

    // {
    //     path:'obra',
    //     redirectTo:''
    // },

    {
        path:'by/:id',
        component:ByObraPageComponent
    },
   

]

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule],
})
export class ArquitecturaRoutingModule { }
