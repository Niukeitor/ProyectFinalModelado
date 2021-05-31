import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable,OneToMany, ManyToOne, JoinColumn
  } from 'typeorm';
   import { Usuario } from "./Usuario"
import { Preguntado } from './Preguntado';


  @Entity()
  export class Comentario extends BaseEntity{
    @PrimaryGeneratedColumn()
    id: number;
  
    @Column({unique: true})
    username: string;

    @Column()
    first_name: string;
  
    @Column()
    last_name: string;
  
    @Column({unique: true})
    email: string;
  
    @Column({unique: true})
    password: string;
   
    @ManyToOne (() => Usuario, usuario => usuario.comentario)
    @JoinColumn()
    usuario: Usuario;
  
 @ManyToOne (() => Preguntado, preguntado => preguntado.comentario)
    @JoinColumn()
    preguntado: Preguntado;


}