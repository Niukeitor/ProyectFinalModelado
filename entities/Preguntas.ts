import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable,OneToMany, OneToOne, JoinColumn
  } from 'typeorm';
  import {Preguntado} from "./Preguntado"
  import {Respuesta} from "./Respuesta"
   


  @Entity()
  export class Preguntas extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;

    @OneToMany(()=> Preguntado, preguntado => preguntado.preguntas)
    preguntado:Preguntado

    @OneToOne(()=> Respuesta, respuesta=> respuesta.pregunta)
    @JoinColumn()
    respuesta:Respuesta

}