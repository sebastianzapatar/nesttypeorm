import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Car } from "src/cars/entities/car.entity";
import { CreateCarRefDto } from "./create-ref-dto";

export class CreateOwnerDto {
    @IsString()
    @MinLength(2)
    name:string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCarRefDto)
    cars?: Car[];
}
