import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Indicador, IndicadorSeleccionado,ApiResponse, ApiResponse2 } from '../models/indicador.model';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class IndicadoresService {

  private apiUrl = 'https://mindicador.cl/api';

  constructor(
    private httpClient: HttpClient
  ) { }

  // getAllIndicadores(){
  //   return this.httpClient.get<Indicador[]>(this.apiUrl);
  // }


  getAllIndicadores(): Observable<Indicador[]> {
    return this.httpClient.get<ApiResponse>(this.apiUrl).pipe(
      map((result) => {
        const { version, autor, fecha, ...items } = result;

        // Extrae los valores del objeto a un array
        return Object.values(items);
      })
    );
  }

  // getIndicador(codigo: string){
  //   return this.httpClient.get<IndicadorSeleccionado>(`${this.apiUrl}/${codigo}`)
  // }


  getIndicador(codigo: string): Observable<IndicadorSeleccionado[]>{
    return this.httpClient.get<ApiResponse2>(`${this.apiUrl}/${codigo}`).pipe(
      map((result) => {
        const { version, autor, ...items } = result;

        // Extrae los valores del objeto a un array
        return Object.values(items);
      })
    );
  }

}
