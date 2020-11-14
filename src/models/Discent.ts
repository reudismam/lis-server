import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

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
}

export default Discent;