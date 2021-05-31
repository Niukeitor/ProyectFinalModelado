import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable,OneToMany, OneToOne
  } from 'typeorm';
  import {Preguntas} from "./Preguntas"
  


  @Entity()
  export class Respuesta extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

@OneToOne(()=> Preguntas, preguntas => preguntas.respuesta)
pregunta: Preguntas
}