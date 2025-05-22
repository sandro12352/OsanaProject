import { Component } from '@angular/core';
import { Obra } from '../../interfaces/obra.interface';
import { OsanaService } from '../../services/osana-service.service';

@Component({
  selector: 'osona-obras',
  templateUrl: './obras.component.html',
  styleUrl: './obras.component.css'
})
export class ObrasComponent {

  constructor(private osanaService:OsanaService){
    this.osanaService.obtenerObras().subscribe(obras =>{
      this.listObras = obras;
    })
  }

  public listObras:Obra[] = []; 


  emitirObra(id:number):void{
    console.log(id)
  }
 
}
