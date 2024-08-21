import { Car } from "src/cars/entities/car.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Owner {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string

    @ManyToMany(() => Car, (car) => car.owners)
    @JoinTable()
    cars: Car[];
}
