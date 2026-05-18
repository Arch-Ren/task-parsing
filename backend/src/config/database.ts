import { DataSource } from "typeorm";
import { User } from "../entities/User";
import { Assignment } from "../entities/Assignment";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "12345678",
    database: "brone_task_taker",
    schema: "public",
    synchronize: false,
    logging: false,
    entities: [User, Assignment],
});