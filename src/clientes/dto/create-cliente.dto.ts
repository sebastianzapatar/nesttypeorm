import { IsNumber, IsString, Min, MinLength } from "class-validator";

export class CreateClienteDto {
    @IsString()
    @MinLength(1)
    name:string
    @IsNumber()
    @Min(10000)
    cedula:number
}
