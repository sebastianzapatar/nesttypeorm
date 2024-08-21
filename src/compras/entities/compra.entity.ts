import { Cliente } from "src/clientes/entities/cliente.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Compra {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    total:number;

    @ManyToOne(()=>Cliente,(cliente)=>cliente.compras)
    cliente:Cliente;
}
