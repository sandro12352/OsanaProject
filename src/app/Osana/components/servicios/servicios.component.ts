import { Component } from '@angular/core';
import { OsanaService } from '../../services/osana-service.service';
import { Servicio } from '../../interfaces/servicio.interface';

@Component({
  selector: 'osana-servicios',
  templateUrl: './servicios.component.html',
  styleUrl: './servicios.component.css'
})
export class ServiciosComponent {

  constructor(private osanaService:OsanaService){
    this.osanaService.obtenerServicios().subscribe(servicios=>{
      this.listServicios = servicios;
    })
  }

  public listServicios:Servicio[] = [];

}
