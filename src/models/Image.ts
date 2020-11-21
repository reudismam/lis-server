import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity("images")
class Image {
    @PrimaryGeneratedColumn('increment')
    id?:number
    @Column()
    image: string
}

export default Image;