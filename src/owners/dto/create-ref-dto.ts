import { IsUUID } from 'class-validator';

export class CreateCarRefDto {
  @IsUUID()
  id: string;
}