import { Component, Input, OnInit, Output, EventEmitter} from '@angular/core';

import { Indicador } from 'src/app/models/indicador.model';

@Component({
  selector: 'app-indicador',
  templateUrl: './indicador.component.html',
  styleUrls: ['./indicador.component.scss']
})
export class IndicadorComponent {

  iconInfo = "https://cdn-icons-png.flaticon.com/512/263/263164.png";
  iconArrow = "https://png.pngtree.com/png-vector/20190511/ourlarge/pngtree-vector-arrows-arrow-icon-arrow-vector-icon-arrow-png-image_1005940.jpg";

  @Input() indica: Indicador = {
    codigo: '',
    nombre: '',
    unidad_medida: '',
    fecha: '',
    valor: 0
  }

  @Output() mostrarDetalle = new EventEmitter<string>();

  constructor() { }

  verDetalle(){
    this.mostrarDetalle.emit(this.indica.codigo);
  }
  
}
