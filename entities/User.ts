import {
    Entity, Column, PrimaryGeneratedColumn, ManyToMany, 
    BaseEntity, JoinTable,OneToMany
  } from 'typeorm';
  
  import {PostPlanets} from "./PostPlanets"
  import {PostPersons} from "./PostPersons"
import { FavsPersons } from './FavPerson';
import { FavsPlanets } from './FavsPlanets';


  @Entity()
  export class User extends BaseEntity{
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
   

    @OneToMany(()=>FavsPersons, favspersons => favspersons.user)
    favspersons: FavsPersons[];
    @OneToMany(()=>FavsPlanets, favsplanets => favsplanets.user)
    favsplanets: FavsPlanets[];
     
  }