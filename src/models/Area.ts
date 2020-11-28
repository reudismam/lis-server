import { Column, Entity, JoinColumn, ManyToMany, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import Discent from "./Discent";

@Entity('areas')
class Area {
    @PrimaryGeneratedColumn()
    id?: number;
    @Column()
    name: string;

    @ManyToOne(() => Discent, discent => discent.areas, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name: "discente_id"})
    discent?: Discent
}

export default Area;