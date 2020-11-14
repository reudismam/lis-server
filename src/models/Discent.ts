import { Column, Entity, JoinColumn, ManyToMany, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import Area from './Area';

@Entity('discentes')
class Discent {
    @PrimaryGeneratedColumn('increment')
    id?: number;
    @Column()
    name: string;
    @Column()
    lastname: string;
    @Column()
    email: string;
    @Column()
    phone: number;
    @Column()
    course: string;
    @Column()
    category: string;
    @Column()
    occupation: string;
    @Column()
    degree: string;
    @Column()
    bio: string;
    @OneToMany(()=>Area, area => area.discent, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: "discente_id"})
    areas: Area[];
}

export default Discent;