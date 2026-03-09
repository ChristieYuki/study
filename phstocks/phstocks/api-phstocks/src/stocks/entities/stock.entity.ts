import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity('stocks')
export class Stock {

    @PrimaryGeneratedColumn()
    id!: number;

    @Column()
    code: string;

    @Column()
    name: string;

    @Column()
    fullName: string; 
    
}
