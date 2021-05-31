import {
    Entity, Column, PrimaryGeneratedColumn, ManyToOne, 
    BaseEntity, JoinTable,OneToMany, JoinColumn
  } from 'typeorm';
import {Preguntado} from "./Preguntado"  


  @Entity()
  export class Categoria extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;


 @ManyToOne (() => Preguntado, preguntado => preguntado.categoria)
    preguntado: Preguntado;

}