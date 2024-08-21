import { IsString, MinLength } from "class-validator";

export class CreateStudenDto {
    @IsString()
    @MinLength(2)
    name:string
}
