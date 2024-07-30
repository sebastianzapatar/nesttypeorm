import { BeforeInsert, Column, Entity, PrimaryGeneratedColumn} from 'typeorm';

@Entity()
export class Pet {
    @PrimaryGeneratedColumn('uuid')
    id: string;
    @Column('text',{
        nullable: false
    })
    name: string;
    @Column('text',{
        nullable: false,
        default: 'lion'
    })
    type: string;
    @BeforeInsert()
    capitalizeName(){
        this.name = this.name.toUpperCase();
    }
    
}
