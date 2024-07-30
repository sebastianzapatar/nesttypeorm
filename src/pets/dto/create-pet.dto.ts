import { IsString, MinLength } from 'class-validator';
export class CreatePetDto {
    @IsString()
    @MinLength(3)
    name: string;
    @IsString()
    @MinLength(3)
    type: string;

}
