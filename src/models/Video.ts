import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('videos')
class Video {
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
}

export default Video;