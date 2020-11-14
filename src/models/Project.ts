import { Column, Entity, JoinColumn, JoinTable, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Discent from "./Discent";

@Entity("projetos")
class Projeto {
    @PrimaryGeneratedColumn()
    id:number;
    @Column()
    name:string;

    @ManyToMany(()=>Discent, discent => discent.projects, {
        cascade: ['insert', 'update']
    })
    discents: Discent []
}

export default Projeto;