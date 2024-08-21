import { Type } from "class-transformer";
import { IsObject, IsString, ValidateNested } from "class-validator";
import { Studen } from "src/studen/entities/studen.entity";

export class CreateCourseDto {
    @IsString()
    name:string;
    
    @IsObject()
    student:Studen
}
