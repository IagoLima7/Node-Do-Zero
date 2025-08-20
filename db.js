import "dotenv/config";
import postgres from "postgres";

console.log("Conectando em:", process.env.DATABASE_URL);

export const sql = postgres(process.env.DATABASE_URL);
