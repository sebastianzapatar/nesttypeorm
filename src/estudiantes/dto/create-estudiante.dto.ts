import { IsNumber, IsString, MinLength,Min } from "class-validator";

export class CreateEstudianteDto {
    @IsString()
    @MinLength(1)
    name:string
    @IsNumber()
    @Min(1000)
    cedula:number
    @IsString()
    @MinLength(1)
    lastName:string
}
