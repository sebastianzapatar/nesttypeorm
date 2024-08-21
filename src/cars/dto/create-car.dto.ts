import { IsString, MinLength } from "class-validator";

export class CreateCarDto {
    @IsString()
    @MinLength(2)
    make:string;

    @IsString()
    @MinLength(2)
    model:string

}
