import { createPool } from 'mysql2';
import dotenv from 'dotenv';

dotenv.config();

const pool = createPool({
    host: process.env.DB_HOST || "localhost",
    user: process.env.DB_USER || "root",
    password: process.env.DB_PASSWORD || "amey",
    database: process.env.DB_NAME || "ebay_api",
    connectionLimit: 10
});

export default pool;
