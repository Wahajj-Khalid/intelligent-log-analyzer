import { pool } from '../config/db';

export interface LogInput {
  service_name: string;
  log_level: string;
  message: string;
}

export interface SystemLog extends LogInput {
  id: number;
  timestamp: Date;
  ai_is_anomaly: boolean;
  ai_category: string;
}

export class LogRepository {
  async createLog(log: LogInput): Promise<SystemLog> {
    const query = `
      INSERT INTO system_logs (service_name, log_level, message)
      VALUES ($1, $2, $3)
      RETURNING *;
    `;
    const values = [log.service_name, log.log_level, log.message];
    const { rows } = await pool.query(query, values);
    return rows[0];
  }

  async getAllLogs(): Promise<SystemLog[]> {
    const { rows } = await pool.query('SELECT * FROM system_logs ORDER BY timestamp DESC;');
    return rows;
  }
}