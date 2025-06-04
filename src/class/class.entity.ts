import { User } from "src/user/user.entity";
import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

export class Class {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string;

    @Column()
    venue: string;

    @Column()
    capacity: number;

    @Column()
    instructor: User;



}
