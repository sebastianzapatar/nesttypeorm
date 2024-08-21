import { IsArray, IsOptional, IsString, ValidateNested } from "class-validator";
import { CreateCursoRefDTO } from "./create-ref-curso";
import { Type } from "class-transformer";
import { Estudiante } from "src/estudiantes/entities/estudiante.entity";

export class CreateCursoDto {
    @IsString()
    name:string

    @IsOptional()
    @IsArray()
    @ValidateNested({each:true})
    @Type(()=>CreateCursoRefDTO)
    estudiante:Estudiante[]
}
