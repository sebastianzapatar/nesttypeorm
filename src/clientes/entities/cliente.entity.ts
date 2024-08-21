import { Compra } from "src/compras/entities/compra.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Cliente {
    @PrimaryGeneratedColumn('uuid')
    id:string;

    @Column()
    name:string;

    @Column()
    cedula:number;
    @OneToMany(()=>Compra,(compra)=>compra.cliente)
    compras:Compra[];
}
