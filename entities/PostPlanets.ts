import {Entity, PrimaryGeneratedColumn, Column, BaseEntity , ManyToOne, OneToMany } from "typeorm"
 import {FavsPlanets} from "./FavsPlanets"
 
@Entity()
export class PostPlanets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    foto:string

    @Column()
    info:string
     
   @OneToMany(() => FavsPlanets, favsplanets => favsplanets.postplanets)
   favsplanets: FavsPlanets;
}