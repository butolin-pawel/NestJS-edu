import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: 'users' })
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column({
        type: "varchar",
        length: 30,
        nullable: false
    })
    username: string;

    @Column({
        type: "varchar",
        length: 30,
        nullable: false,
        unique: true
    })
    email: string;

    @Column({
        name: "ishidden",
        type: "boolean",
        nullable: false,
    })
    isHidden: boolean;
}   
