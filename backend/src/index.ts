import "reflect-metadata";
import { AppDataSource } from "./config/database";
import { User } from "./entities/User";

async function main() {
    try {
        // 1. Attempt to connect to PostgreSQL
        console.log("⏳ Connecting to PostgreSQL database...");
        await AppDataSource.initialize();
        console.log("🚀 Database successfully connected!");

        // 2. Perform a sanity test query (Count how many users are in the DB)
        const userRepository = AppDataSource.getRepository(User);
        const userCount = await userRepository.count();
        
        console.log(`📊 Connection Check Successful! Current user count in database: ${userCount}`);

    } catch (error) {
        console.error("❌ Database connection failed!");
        console.error("Error details:", error);
    }
}

main();