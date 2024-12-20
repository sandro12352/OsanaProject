import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Observable, of } from 'rxjs';
import { Obra } from '../interfaces/obra.interface';
import { Proyecto } from '../interfaces/proyecto.interface';

@Injectable({
  providedIn: 'root'
})
export class OsanaService {

  constructor(private http:HttpClient) { 
 
  }
  private paqueteJason:string = './assets/Data'


 obtenerObras():Observable<Obra[]>{
  const  url = `${this.paqueteJason}/obras.json`;
  return this.http.get<Obra[]>(url);
 }

 obtenerProyectos():Observable<Proyecto[]>{
  const  url = `${this.paqueteJason}/proyectos.json`;
  return this.http.get<Proyecto[]>(url);
 }


 obtenerObra(id: number): Observable<Obra | null> {
  const url = `${this.paqueteJason}/obras.json`;
  return this.http.get<Obra[]>(url).pipe(
    map(obras => {
      const obraEncontrada = obras.find(obra => obra.id == id);
      return obraEncontrada ? obraEncontrada : null;
    }),
    catchError(error => {
      console.error('Error fetching obras:', error);
      return of(null);
    })
  );
}

  enviarWhatsapp(data:any):Observable<any>{
   return this.http.post("https://localhost:3000/Whatsapp",data)};
}
