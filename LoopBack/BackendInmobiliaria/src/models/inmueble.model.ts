import {Entity, model, property} from '@loopback/repository';

@model({settings: {strict: false}})
export class Inmueble extends Entity {
  @property({
    type: 'string',
    id: true,
    generated: true,
  })
  id?: string;

  @property({
    type: 'string',
    required: true,
  })
  departamento: string;

  @property({
    type: 'string',
    required: true,
  })
  ciudad: string;

  @property({
    type: 'string',
    required: true,
  })
  direccion: string;

  @property({
    type: 'number',
    required: true,
  })
  valor: number;

  @property({
    type: 'array',
    itemType: 'string',
    required: true,
  })
  tipoInmueble: string[];

  @property({
    type: 'boolean',
    required: true,
  })
  tipoOferta: boolean;

  @property({
    type: 'string',
    required: true,
  })
  encargado: string;

  @property({
    type: 'string',
    required: true,
  })
  contactoEncargado: string;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoAlquiler: boolean;

  @property({
    type: 'boolean',
    required: true,
  })
  estadoCompra: boolean;

  @property({
    type: 'string',
    required: true,
  })
  descripcion: string;

  @property({
    type: 'number',
    required: true,
  })
  porcentajeParticipacion: number;

  @property({
    type: 'string',
    required: true,
  })
  fotografias: string;

  @property({
    type: 'string',
  })
  enlaceVideo?: string;

  @property({
    type: 'string',
  })
  asesorId?: string;

  @property({
    type: 'string',
  })
  solicitudId?: string;
  // Define well-known properties here

  // Indexer property to allow additional data
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  [prop: string]: any;

  constructor(data?: Partial<Inmueble>) {
    super(data);
  }
}

export interface InmuebleRelations {
  // describe navigational properties here
}

export type InmuebleWithRelations = Inmueble & InmuebleRelations;
