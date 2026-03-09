import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('users_stocks')
export class UsersStocks {

    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    userId: string;

    @Column()
    stockId: number;

}
