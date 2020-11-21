import { Column, Entity, JoinColumn, OneToOne, PrimaryGeneratedColumn } from "typeorm";
import Discent from "./Discent";

@Entity("images")
class Image {
    @PrimaryGeneratedColumn('increment')
    id?: number;
    @Column()
    image: string
}

export default Image;