import { Studen } from "src/studen/entities/studen.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Course {
    @PrimaryGeneratedColumn('uuid')
    id:string

    @Column()
    name:string

    @ManyToOne(()=>Studen,(student)=>student.courses)
    student:Studen
}
