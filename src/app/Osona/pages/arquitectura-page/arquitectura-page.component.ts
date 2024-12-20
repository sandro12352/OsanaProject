import { Component } from '@angular/core';
import { OsanaService } from '../../services/osana-service.service';

@Component({
  selector: 'app-arquitectura-page',
  templateUrl: './arquitectura-page.component.html',
  styleUrl: './arquitectura-page.component.css'
})
export class ArquitecturaPageComponent {
  // public listObras:Obra[] = [];
  
  constructor(private osanaService:OsanaService){
    // this.osanaService.obtenerObras().subscribe(obras =>{
    //   this.listObras  = obras;
    // }) 

   


    
  }
  

  
}
