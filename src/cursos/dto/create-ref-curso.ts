import { IsUUID } from "class-validator";

export class CreateCursoRefDTO{
    @IsUUID()
    id:string
}