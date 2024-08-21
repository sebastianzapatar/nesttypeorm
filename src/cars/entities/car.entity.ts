import { Owner } from "src/owners/entities/owner.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Car {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    make: string;
  
    @Column()
    model: string;

    @ManyToMany(() => Owner, (owner) => owner.cars)
    owners: Owner[];

}
