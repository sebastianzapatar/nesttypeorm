import { Type } from "class-transformer";
import { IsArray, IsOptional, IsString, MinLength, ValidateNested } from "class-validator";
import { Car } from "src/cars/entities/car.entity";
import { CreateCarRefDto } from "./create-ref-dto";
import { ApiProperty } from '@nestjs/swagger';

export class CreateOwnerDto {

    @ApiProperty({ example: 'Juan Camilo', description: 'The name of the person' })
    @IsString()
    @MinLength(2)
    name:string;

    @IsOptional()
    @IsArray()
    @ValidateNested({ each: true })
    @Type(() => CreateCarRefDto)
    cars?: Car[];
}
