import { Column, Entity, PrimaryColumn } from "typeorm";

@Entity("users")
export class User {

    @PrimaryColumn()
    id!: string;

    @Column()
    email: string;

    @Column()
    password: string;

    @Column('simple-array')
    roles: string[];

    @Column({ nullable: true })
    refreshToken?: string;

}
