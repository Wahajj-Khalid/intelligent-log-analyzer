import { Request, Response } from 'express';
import { LogRepository } from '../repositories/logRepository';

const logRepository = new LogRepository();

export class LogController {
  async ingestLog(req: Request, res: Response): Promise<void> {
    try {
      const { service_name, log_level, message } = req.body;
      
      // Simple Input Validation Barrier (Security Best Practice)
      if (!service_name || !log_level || !message) {
        res.status(400).json({ error: "Missing required fields: service_name, log_level, message" });
        return;
      }

      const newLog = await logRepository.createLog({ service_name, log_level, message });
      
      // Return HTTP 201 Created status
      res.status(201).json(newLog);
    } catch (error) {
      console.error("Error ingesting log:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }

  async fetchLogs(req: Request, res: Response): Promise<void> {
    try {
      const logs = await logRepository.getAllLogs();
      res.json(logs);
    } catch (error) {
      console.error("Error fetching logs:", error);
      res.status(500).json({ error: "Internal Server Error" });
    }
  }
}