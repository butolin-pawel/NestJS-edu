import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "post" })
export class Postapp {
    @PrimaryGeneratedColumn()
    id : number;

    @Column()
    title : string;

    @Column()
    description : string;

    @Column()
    avatar : string;
}
