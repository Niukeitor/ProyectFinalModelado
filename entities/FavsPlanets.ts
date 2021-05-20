import {Entity, PrimaryGeneratedColumn, Column, BaseEntity , OneToMany, ManyToOne } from "typeorm"
import {PostPlanets} from "./PostPlanets"
import {User} from "./User"
@Entity()
export class FavsPlanets extends BaseEntity {
    @PrimaryGeneratedColumn()
    id: number
     
   @ManyToOne(()=>PostPlanets, postplanets => postplanets.favsplanets)
    postplanets: PostPlanets;
   
  
   @ManyToOne(()=>User, user => user.favsplanets)
    user: User;
}