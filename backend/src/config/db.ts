import { Pool } from 'pg';
import dotenv from 'dotenv';

dotenv.config();

export const pool = new Pool({
  user: process.env.DB_USER,
  host: process.env.DB_HOST,
  database: process.env.DB_NAME,
  password: process.env.DB_PASSWORD,
  port: Number(process.env.DB_PORT) || 5432,
});

export const initDb = async (): Promise<void> => {
  const createTableQuery = `
    CREATE TABLE IF NOT EXISTS system_logs (
      id SERIAL PRIMARY KEY,
      timestamp TIMESTAMP WITH TIME ZONE DEFAULT CURRENT_TIMESTAMP,
      service_name VARCHAR(100) NOT NULL,
      log_level VARCHAR(20) NOT NULL,
      message TEXT NOT NULL,
      ai_is_anomaly BOOLEAN DEFAULT FALSE,
      ai_category VARCHAR(100) DEFAULT 'Unclassified'
    );
  `;
  const client = await pool.connect();
  try {
    await client.query(createTableQuery);
    console.log("✅ PostgreSQL Table 'system_logs' verified.");
  } finally {
    client.release();
  }
};