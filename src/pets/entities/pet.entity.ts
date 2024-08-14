import { BeforeInsert, Column, Entity, ManyToOne, PrimaryGeneratedColumn} from 'typeorm';
import { User } from 'src/auth/entities/auth.entity';
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
    @ManyToOne(()=>User, user=>user.pets)
    user: User;
    
}
