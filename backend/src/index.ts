import express from 'express';
import dotenv from 'dotenv';
import { initDb } from './config/db';
import logRoutes from './routes/logRoutes';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(express.json());

// Attach Modular API Version 1 Route Modules
app.use('/api/v1', logRoutes);

const bootstrap = async () => {
  try {
    await initDb();
    app.listen(PORT, () => {
      console.log(`🚀 Architecture Upgraded: API running on http://localhost:${PORT}/api/v1`);
    });
  } catch (err) {
    console.error("❌ Critical server bootstrap failure:", err);
    process.exit(1);
  }
};

bootstrap();