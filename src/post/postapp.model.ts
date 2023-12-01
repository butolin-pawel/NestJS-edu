import { Column, Entity, Generated, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "post" })
export class PostModel {
    @PrimaryGeneratedColumn({
    })
    id: number;

    @Column({
        nullable: false,
        type: "varchar",
        length: 30,
    })
    title: string;

    @Column({
        nullable: false,
        type: "text",
    })
    description: string;

    @Column({
        nullable: false,
        type: "varchar",
        length: 30,
    })
    avatar: string;
}
