import { Component, OnInit } from '@angular/core';
import { OsanaService } from '../../services/osana-service.service';
import { ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs';
import { Obra } from '../../interfaces/obra.interface';

@Component({
  selector: 'osaba-by-obra-page',
  templateUrl: './by-obra-page.component.html',
  styleUrl: './by-obra-page.component.css'
})
export class ByObraPageComponent implements OnInit{
  

  public obra:Obra|null =null;

  constructor(private activatedRoute:ActivatedRoute, private osanaService:OsanaService){

  }
  ngOnInit(): void {
    this.activatedRoute.params
      .pipe(
        switchMap(({ id }) => {
          console.log('ID recibido:', id);  // Verifica el valor de ID
          return this.osanaService.obtenerObra(id);
        })
      )
      .subscribe((obra) => {
       return this.obra = obra;
      });
  }
  

  



        

}
