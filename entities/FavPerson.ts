import {Entity, PrimaryGeneratedColumn, Column, BaseEntity , OneToMany, ManyToOne } from "typeorm"
 import {PostPersons} from "./PostPersons"
 import {User} from "./User"
@Entity()
export class FavsPersons extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
     
   @ManyToOne(()=>PostPersons, postpersons => postpersons.favspersons)
    postpersons: PostPersons;
     
   @ManyToOne(()=>User, user => user.favspersons)
    user: User;
   
}