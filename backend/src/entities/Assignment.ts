import { Entity, PrimaryColumn, Column, ManyToOne, JoinColumn, UpdateDateColumn } from "typeorm";
import { User } from "./User";

@Entity({ name: "assignment", schema: "public" })
export class Assignment {
    @PrimaryColumn({ type: "varchar", length: 50 })
    id!: string;

    @Column({ name: "user_id", type: "integer", nullable: true})
    userId!: number | null;

    @Column ({ name: "course_name", type: "varchar", length: 100, nullable: false })
    courseName!: string;

    @Column({ type: "varchar", length: 250, nullable: false })
    title!: string;

    @Column({ type: "text", nullable: true })
    description!: string | null;

    @Column({ type: "timestamp", nullable: false })
    deadline!: Date;

    @Column({ type: "varchar", length: 6, default: "Belum" })
    status!: string;

    @UpdateDateColumn({ name: "updated_at", type: "timestamp", default: () => "CURRENT_TIMESTAMP" })
    updatedAt!: Date;

    @ManyToOne(() => User, (user) => user.assignment, { onDelete: "CASCADE" })
    @JoinColumn({ name: "user_id"})
    user!: User;
}