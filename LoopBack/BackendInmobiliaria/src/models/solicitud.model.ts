import {Entity, model, property, hasOne} from '@loopback/repository';
import {Inmueble} from './inmueble.model';

@model()
export class Solicitud extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'boolean',
    required: true,
  })
  tipo: boolean;

  @property({
    type: 'string',
    required: true,
  })
  idInmueble: string;

  @property({
    type: 'date',
    required: true,
  })
  fecha: string;

  @property({
    type: 'string',
    required: true,
  })
  estadoSolicitud: string;

  @property({
    type: 'string',
  })
  comentarioAsesor?: string;

  @property({
    type: 'string',
    required: true,
  })
  idCliente: string;

  @property({
    type: 'string',
  })
  clienteId?: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @hasOne(() => Inmueble)
  inmueble: Inmueble;

  constructor(data?: Partial<Solicitud>) {
    super(data);
  }
}

export interface SolicitudRelations {
  // describe navigational properties here
}

export type SolicitudWithRelations = Solicitud & SolicitudRelations;
