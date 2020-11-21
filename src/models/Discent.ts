import { Column, Entity, JoinColumn, JoinTable, ManyToMany, OneToMany, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Area from './Area';
import Project from "./Project";
import Image from './Image';

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

    @ManyToMany(() => Project, project => project.discents, {
        cascade: ['insert', 'update']
    })
    @JoinTable({
        name: "discente_projeto",
        joinColumn: {
            name: 'discentes_id',
            referencedColumnName: 'id'
        },
        inverseJoinColumn: {
            name: 'projetos_id',
            referencedColumnName: 'id'
        }
    })
    projects: Project [];
    @OneToOne(()=>Image, {
        cascade: ['insert', 'update']
    })
    @JoinColumn({name:"image_id"})
    photo: Image
}

export default Discent;