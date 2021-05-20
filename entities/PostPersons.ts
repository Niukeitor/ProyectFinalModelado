import {Entity, PrimaryGeneratedColumn, Column, BaseEntity , ManyToOne, OneToMany } from "typeorm"
 import {FavsPersons} from "./FavPerson"
 
@Entity()
export class PostPersons extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    nombre: string

    @Column()
    foto:string

    @Column()
    info:string

    @OneToMany(() => FavsPersons, favspersons => favspersons.postpersons)
   favspersons: FavsPersons;
}