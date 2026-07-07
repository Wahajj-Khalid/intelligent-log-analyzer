import { Router } from 'express';
import { LogController } from '../controllers/logController';

const router = Router();
const logController = new LogController();

router.post('/logs', logController.ingestLog);
router.get('/logs', logController.fetchLogs);

export default router;