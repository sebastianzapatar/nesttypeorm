import { IsNumber, IsObject,  Min } from "class-validator";
import { Cliente } from "src/clientes/entities/cliente.entity";

export class CreateCompraDto {
    @IsNumber()
    @Min(15000)
    total:number

    @IsObject()
    cliente:Cliente

}
