import { Column, Entity, JoinColumn, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Discent from "./Discent";
import Image from './Image';

@Entity('projetos')
class Project {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    title: string;
    @Column()
    year: number;
    @Column()
    situation: string;
    @Column()
    featured: boolean;
    @Column()
    description: string;

    @ManyToMany(() => Discent, discent => discent.projects, {
        cascade: ['insert', 'update']
    })
    discents: Discent [];
    @JoinColumn({name: "image_id"})
    photo?: Image;
}

export default Project;