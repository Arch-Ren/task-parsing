import { Entity, PrimaryGeneratedColumn, Column, OneToMany, CreateDateColumn } from "typeorm";
import { Assignment } from "./Assignment";

@Entity( {name: "users", schema: "public" })
export class User {
    @PrimaryGeneratedColumn()
    id!: number;

    @Column({ unique: true, type: "varchar", length: 20, nullable: false })
    nim!: string;
    
    @Column({ name: "password_encrypted", type: "text", nullable: false })
    passwordEncrypted!: string;

    @Column({ name: "reminder_chat_id", type: "varchar", length: 50, nullable: true })
    reminder_chat_id!: string | null;

    @Column( { name: "remind_days_before", type: "integer", default: 1 })
    remind_days_before?: number;

    @CreateDateColumn({ name: "created_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    createdAt!: Date;

    @OneToMany(() =>  Assignment, (assignment) => assignment.user)
    assignment!: Assignment[];
}