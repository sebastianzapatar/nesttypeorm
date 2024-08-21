import { Course } from "src/courses/entities/course.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Studen {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string;

    @OneToMany(()=>Course,(course)=>course.student)
    courses:Course[];
}
