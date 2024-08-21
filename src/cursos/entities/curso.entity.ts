import { Estudiante } from "src/estudiantes/entities/estudiante.entity";
import { Column, Entity, JoinTable, ManyToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Curso {
    @PrimaryGeneratedColumn('uuid')
    id:string;
    @Column()
    name:string
    @ManyToMany(()=>Estudiante,(estudiante)=>estudiante.cursos)
    @JoinTable()
    estudiantes:Estudiante[]
}
