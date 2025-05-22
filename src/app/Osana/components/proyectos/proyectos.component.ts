import { Component, Input } from '@angular/core';
import { Proyecto } from '../../interfaces/proyecto.interface';
import { OsanaService } from '../../services/osana-service.service';

@Component({
  selector: 'osona-proyectos',
  templateUrl: './proyectos.component.html',
  styleUrl: './proyectos.component.css'
})
export class ProyectosComponent {
    
  
  constructor(private osanaService:OsanaService){
    this.osanaService.obtenerProyectos().subscribe(proyectos=>{
      this.listaProyectos = proyectos;
    })
  }



  public listaProyectos:Proyecto[] = [];
}
