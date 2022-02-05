
export interface Uf{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Ivp{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Dolar{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Dolar_intercambio{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Euro{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Ipc{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Utm{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Imacec{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Tpm{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Libra_cobre{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Tasa_desempleo{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}
export interface Bitcoin{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}

export interface Serie{
    fecha: string;
    valor: number;
}

export interface Indicador{
    codigo: string;
    nombre: string;
    unidad_medida: string;
    fecha: string;
    valor: number;
}

export interface ApiResponse {
    version: string;
    autor: string;
    fecha: string;
  
    uf: Indicador;
    ivp: Indicador;
    dolar: Indicador;
    dolar_intercambio: Indicador;
    euro: Indicador;
    ipc: Indicador;
    utm: Indicador;
    imacec: Indicador;
    tpm: Indicador;
    libra_cobre: Indicador;
    tasa_desempleo: Indicador;
    bitcoin: Indicador;
  }

export interface IndicadorSeleccionado{
    codigo: string;
    nombre: string;
    unidad_medida: string;
}

export interface ApiResponse2 {
    version: string;
    autor: string;
  
    serie: Serie;
  }

