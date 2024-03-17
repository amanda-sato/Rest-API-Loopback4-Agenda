import {Entity, model, property, hasMany} from '@loopback/repository';
import {Tarefa} from './tarefa.model';

@model()
export class Dia extends Entity {
  @property({
    type: 'number',
    id: true,
    generated: true,
  })
  id?: number;

  @property({
    type: 'date',
    required: true,
  })
  data: string;

  @hasMany(() => Tarefa)
  tarefas: Tarefa[];

  constructor(data?: Partial<Dia>) {
    super(data);
  }
}

export interface DiaRelations {
  // describe navigational properties here
}

export type DiaWithRelations = Dia & DiaRelations;
