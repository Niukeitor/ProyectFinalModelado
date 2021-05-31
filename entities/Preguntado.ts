import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable,OneToMany,JoinColumn, ManyToOne
  } from 'typeorm';
  import {Comentario} from "./Comentario"
  import {Categoria} from "./Categoria"
import { Preguntas } from './Preguntas';
  


  @Entity()
  export class Preguntado extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;


 @OneToMany (() => Comentario , comentario => comentario.preguntado)
    comentario: Comentario;

     @OneToMany (() => Categoria, categoria => categoria.preguntado)
    @JoinColumn()
    categoria: Categoria;

    @ManyToOne (()=> Preguntas, preguntas => preguntas.preguntado)
    @JoinColumn()
    preguntas:Preguntas



}