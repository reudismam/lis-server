import { Column, Entity, ManyToMany, PrimaryGeneratedColumn } from "typeorm";
import Discent from "./Discent";

@Entity('projetos')
class Project {
    @PrimaryGeneratedColumn('increment')
    id: number;
    @Column()
    title: string;
    @Column()
    year: number;
    @Column()
    description: string;

    @ManyToMany(() => Discent, discent => discent.projects, {
        cascade: ['insert', 'update']
    })
    discents: Discent [];

    equals(project: Project) {
        return this.title === project.title;
    }
}

export default Project;