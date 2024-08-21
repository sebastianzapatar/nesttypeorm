import { Curso } from "src/cursos/entities/curso.entity";
import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Estudiante {
    @PrimaryGeneratedColumn('uuid')
    id:string
    
    @Column('bigint',{
        unique:true
    })
    cedula:number

    @Column()
    name:string

    @Column()
    lastName:string

    @ManyToMany(()=>Curso,(curso)=>curso.estudiantes)
    cursos:Curso[]
}
