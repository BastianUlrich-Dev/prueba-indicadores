import { Component, OnInit } from '@angular/core';

import { Indicador, IndicadorSeleccionado } from 'src/app/models/indicador.model';

import { IndicadoresService } from 'src/app/services/indicadores.service';

@Component({
  selector: 'app-indicadores',
  templateUrl: './indicadores.component.html',
  styleUrls: ['./indicadores.component.scss']
})
export class IndicadoresComponent implements OnInit {


  indicadores:Indicador[] = [];

  items: Record<string, string|number>[] = [];

  indicadorSeleccionado: IndicadorSeleccionado[]=[];

  indicadorSelect: IndicadorSeleccionado = {
    codigo: '',
    nombre: '',
    unidad_medida: ''
  }

  verDetalleIndicador = false;

  constructor(
    private indicadoresService: IndicadoresService
  ) { }


  ngOnInit(): void {
    this.indicadoresService.getAllIndicadores()
    .subscribe(data => {
      this.indicadores = data
      console.log(this.indicadores);
    });
    
  }

  accionBotonDetalle(){
    this.verDetalleIndicador = !this.verDetalleIndicador;
  }

  mostrarDetalle(codigo: string){
    this.indicadoresService.getIndicador(codigo)
    .subscribe(data =>{
      console.log('Indicador', data);
      this.accionBotonDetalle();
      this.indicadorSeleccionado = data;
    })
  }
  



  


}
